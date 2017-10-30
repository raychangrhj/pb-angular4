import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { AgencyConnectionDialogComponent } from 'app/components/agency-connection-dialog/agency-connection-dialog.component';
import { ShiftSelectionDialogComponent } from 'app/components/shift-selection-dialog/shift-selection-dialog.component';
import { BookingInviteDialogComponent } from 'app/components/booking-invite-dialog/booking-invite-dialog.component';
import { ApplyWorkDialogComponent } from 'app/components/apply-work-dialog/apply-work-dialog.component';
import { ConfirmDialogComponent } from 'app/components/confirm-dialog/confirm-dialog.component';
import { ReadyBookDialogComponent } from 'app/components/ready-book-dialog/ready-book-dialog.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobDetail: any;
  jobDetailAllVisible: boolean;
  client: any;
  review: string;
  reviewRating: number;
  submitValidation: any;

  constructor(
    private elementRef: ElementRef,
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
    if(dataSource == "payments") this.jobDetail = this.dataService.getPaymentData().filter(job => job.id == jobId)[0];
    this.jobDetailAllVisible = false;
    this.client = {
      companyLogo: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
      companyTitle: this.jobDetail.clientName,
      companyRating: 4.5,
      managerPhoto: "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
      managerName: "Stacy W. - Event Coordinator"
    };
    this.reviewRating = 0;
    this.submitValidation = {
      review: false,
      reviewRating: false,
    }
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

  openBookingInviteDialog() {
    let dialogRef = this.dialog.open(BookingInviteDialogComponent, {
      data: {
        jobDetail: {
          title: "Brand Ambassador - Product Launch Event",
          date: "June 13-14,2017",
          location: "Kansas City Power & Light District",
          rate: "$32/hr"
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === "ok") this.openBookingConfirmedDialog();
    });
  }

  openBookingConfirmedDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        type: "confirmed",
        title: "Booking Confirmed!",
        description: "Congratulations on your new booking! This booking will now show up on your Bookings page. Check your Messages for important updates and instructions as we get closer to the day of the event."
      }
    });
  }

  openShiftSeletionDialog() {
    let dialogRef = this.dialog.open(ShiftSelectionDialogComponent, {
      data: { shifts: this.dataService.getShiftData() }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) this.openReadyBookDialog();
    });
  }

  openReadyBookDialog() {
    let dialogRef = this.dialog.open(ReadyBookDialogComponent, {
      data: { data: "" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) this.openShiftSelectionSentDialog();
    })
  }

  openShiftSelectionSentDialog() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        type: "sent",
        title: "Shift Selection Sent!",
        description: "We've sent your selected shifts for this listing to <b>Worldwide Promotions Inc.</b><br><br>You'll be sent a Booking Confirmation when any or all of your selected shifts are accepted by the agency."
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  openApplyWorkDialog() {
    let dialogRef = this.dialog.open(ApplyWorkDialogComponent, {
      data: {
        jobDetail: {
          title: "Brand Ambassador - Product Launch Event",
          date: "June 13-14,2017",
          location: "Kansas City Power & Light District",
          rate: "$32/hr"
        }
      }
    });
  }

  reviewEdited(event) {
    this.review = event.target.value;
    this.submitValidation.review = this.review;
  }

  mouseMoved(event) {
    var x = event.offsetX;
    var w = this.elementRef.nativeElement.querySelector(".panel-review .star-rating").offsetWidth;
    this.reviewRating = x / w * 5;
    this.submitValidation.reviewRating = true;
  }

}
