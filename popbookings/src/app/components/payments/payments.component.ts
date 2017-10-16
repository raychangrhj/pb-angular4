import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  filterContainerVisible: boolean;
  filterStatusList: any[];
  filterOtherList: string[];
  filterStatus: string;
  filterOther: string;
  searchString: string;
  paidJobCount: number;
  pendingJobCount: number;
  sortFieldList: any[];
  sortField: string;
  jobList: any[];
  bankTitle: string;
  bankAccount: string;
  paymentAmount: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterStatusList = [
      { key: "", value: "Paid & Pending" },
      { key: "paid", value: "Paid" },
      { key: "pending", value: "Pending" }
    ];
    this.filterOtherList = ["A", "B", "C"];
    this.sortFieldList = [
      { key: "date", value: "DATE" },
      { key: "city", value: "CITY" }
    ];
    this.sortField = this.sortFieldList[0].key;
    this.jobList = this.dataService.getPaymentData();
    this.bankTitle = "Landmark National Bank";
    this.bankAccount = "&#8226; &#8226; &#8226; &#8226; 1234";

    this.reset();
  }

  reset() {
    this.filterStatus = this.filterStatusList[0].key;
    this.filterOther = this.filterOtherList[0];
    this.searchString = "";
    this.update();
  }

  update() {
    this.jobList = this.dataService.getPaymentData().filter(job =>
      this.commonService.contains(job.jobType, this.filterStatus) &&
      this.commonService.contains(job.title, this.searchString)
    );
    this.pendingJobCount = this.jobList.filter(job => this.commonService.contains(job.jobType, "pending")).length;
    this.paidJobCount = this.jobList.length - this.pendingJobCount;
    this.paymentAmount = 0;
    this.jobList.filter(job => this.commonService.contains(job.jobType, "paid")).forEach(job => {
      this.paymentAmount += job.amount;
    });
  }

  search(event) {
    if(event.key == "Enter") this.update();
  }

  sort() {
    console.log(this.sortField);
  }

  gotoJobDetails(jobId) {
    this.router.navigate(["jobdetails", { source: "payments", id: jobId }]);
  }

}
