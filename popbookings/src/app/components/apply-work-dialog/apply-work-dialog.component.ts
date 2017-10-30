import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-apply-work-dialog',
  templateUrl: './apply-work-dialog.component.html',
  styleUrls: ['./apply-work-dialog.component.css']
})
export class ApplyWorkDialogComponent implements OnInit {
  jobDetail: any;
  coverletter: string;
  agreePolicy: boolean;

  constructor(
    public dialogRef: MdDialogRef<ApplyWorkDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.jobDetail = this.data.jobDetail;
    this.coverletter = "Hey guys, I would love to work this job listing and I think I would be a great fit! I have over 7 years of experience in event management and have been a brand ambassador for several consumer brands including Coca-Cola, Tesla & many more! Take a look at my resume and let me know how I can help make your event a success.";
    this.agreePolicy = false;
  }

  cancel() {
    this.dialogRef.close();
  }

  apply() {
    this.dialogRef.close();
  }

}
