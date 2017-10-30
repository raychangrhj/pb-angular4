import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  type: string;
  icon: string;
  title: string;
  description: string;

  constructor(
    public dialogRef: MdDialogRef<ConfirmDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.type = this.data.type;
    if(this.type === "confirmed") {
      this.icon = "assets/images/confirmed-icon.png";
    } else if(this.type === "sent") {
      this.icon = "assets/images/sent-icon.png";
    }
    this.title = this.data.title;
    this.description = this.data.description;
  }

}
