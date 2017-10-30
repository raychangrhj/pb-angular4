import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-booking-invite-dialog',
  templateUrl: './booking-invite-dialog.component.html',
  styleUrls: ['./booking-invite-dialog.component.css']
})
export class BookingInviteDialogComponent implements OnInit {
  jobDetail: any;
  messageInfo: any;
  agreePolicy: boolean;

  constructor(
    public dialogRef: MdDialogRef<BookingInviteDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.jobDetail = this.data.jobDetail;
    this.messageInfo = {
      date: "Wed, Feb 25, 2017 6:10 PM",
      message: "Jessica, Boulevard Brewing Co. would like to invite you to work as a Bartender at our job listing <b>&quot;Boulevard Nights&quot;</b> beginning on <b>Saturday, June 13, 2017</b> in <b>Kansas City,MO.</b> Please let us know if you have any questions about Boulevard Brewing Co. or this job listing!",
      senderPhoto: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
      senderName: "Mike H. - Boulevard Brewing Co."
    };
    this.agreePolicy = false;
  }

  cancel() {
    this.dialogRef.close();
  }

  book() {
    this.dialogRef.close();
  }

}
