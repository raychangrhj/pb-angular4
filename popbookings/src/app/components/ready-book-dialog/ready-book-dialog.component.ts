import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ready-book-dialog',
  templateUrl: './ready-book-dialog.component.html',
  styleUrls: ['./ready-book-dialog.component.css']
})
export class ReadyBookDialogComponent implements OnInit {
  jobTitle: string;
  shifts: any[];

  constructor(
    public dialogRef: MdDialogRef<ReadyBookDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.jobTitle = "Support Staff - Techweek KC";
    this.shifts = [
      {
        day: 8,
        date: "Friday, March 8, 2017",
        times: [ "9:00 AM - 5:00 PM" ],
        rate: {
          value: 28,
          unit: "hr"
        },
        location: {
          name: "KC Live!",
          street: "1401 Main St",
          city: "Kansas City,MO 64101"
        }
      }, {
        day: 9,
        date: "Saturday, March 9, 2017",
        times: [ "9:00 AM - 11:00 AM", "2:00 PM - 5:00 PM" ],
        rate: {
          value: 150,
          unit: "day"
        },
        location: {
          name: "KC Live!",
          street: "1401 Main St",
          city: "Kansas City,MO 64101"
        }
      }
    ];
  }

}
