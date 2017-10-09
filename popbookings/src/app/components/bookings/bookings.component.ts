import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  filterContainerVisible: boolean;
  filterStatusList: any[];
  filterOtherList: string[];
  filterStatus: string;
  filterOther: string;
  searchString: string;
  bookedJobCount: number;
  pendingJobCount: number;
  sortFieldList: any[];
  sortField: string;
  jobList: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterStatusList = [
      { key: "", value: "Booked & Pending" },
      { key: "booked", value: "Booked" },
      { key: "pending", value: "Pending" }
    ];
    this.filterOtherList = ["A", "B", "C"];
    this.sortFieldList = [
      { key: "date", value: "DATE" },
      { key: "city", value: "CITY" }
    ];
    this.sortField = this.sortFieldList[0].key;
    this.jobList = this.dataService.getBookingData();

    this.reset();
  }

  reset() {
    this.filterStatus = this.filterStatusList[0].key;
    this.filterOther = this.filterOtherList[0];
    this.searchString = "";
    this.update();
  }

  update() {
    this.jobList = this.dataService.getBookingData().filter(job =>
      this.commonService.contains(job.jobType, this.filterStatus) &&
      this.commonService.contains(job.title, this.searchString)
    );
    this.pendingJobCount = this.jobList.filter(job => this.commonService.contains(job.jobType, "pending")).length;
    this.bookedJobCount = this.jobList.length - this.pendingJobCount;
  }

  search(event) {
    if(event.key == "Enter") this.update();
  }

  sort() {
    console.log(this.sortField);
  }

  gotoJobDetails(jobId) {
    console.log(jobId);
  }

}
