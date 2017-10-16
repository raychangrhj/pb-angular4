import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { AgencyConnectionDialogComponent } from 'app/components/agency-connection-dialog/agency-connection-dialog.component';
import { ShiftSelectionDialogComponent } from 'app/components/shift-selection-dialog/shift-selection-dialog.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobDetail: any;
  jobDetailAllVisible: boolean;
  client: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    var dataSource = this.activatedRoute.snapshot.params.source;
    var jobId = this.activatedRoute.snapshot.params.id;
    if(dataSource == "job-board") this.jobDetail = this.dataService.getJobBoardData().filter(job => job.id == jobId)[0];
    if(dataSource == "bookings") this.jobDetail = this.dataService.getBookingData().filter(job => job.id == jobId)[0];
    this.jobDetailAllVisible = false;
    this.client = {
      companyLogo: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
      companyTitle: this.jobDetail.clientName,
      companyRating: 4.5,
      managerPhoto: "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
      managerName: "Stacy W. - Event Coordinator"
    };
  }

  gotoClientProfile() {
    if(this.jobDetail.clientType == "agency") this.router.navigate(["profile-agency", { client: this.jobDetail.clientName }]);
    if(this.jobDetail.clientType == "business") this.router.navigate(["profile-business", { client: this.jobDetail.clientName }]);
  }

  openAgencyConnectionDialog() {
    let dialogRef = this.dialog.open(AgencyConnectionDialogComponent, {
      data: { data: "" }
    });
  }

  openShiftSeletionDialog() {
    let dialogRef = this.dialog.open(ShiftSelectionDialogComponent, {
      data: { shifts: this.dataService.getShiftData() }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
