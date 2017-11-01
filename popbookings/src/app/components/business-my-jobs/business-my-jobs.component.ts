import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-business-my-jobs',
  templateUrl: './business-my-jobs.component.html',
  styleUrls: ['./business-my-jobs.component.css']
})
export class BusinessMyJobsComponent implements OnInit {
  first: boolean;
  currentView: string;
  firstJob: any;

  constructor() { }

  ngOnInit() {
    this.first = true;
    this.currentView = "step-2";
    this.firstJob = {
      title: "Product Launch Event",
      listingVisibility: true,
      description: "",
      startDate: new Date(),
      duration: {
        days: [ 1, 2, 3, 4, 5 ],
        activeDay: 2
      },
      timeFormat: "h:mm A",
      startTime: {
        list: [],
        index: 0,
        time: ""
      },
      endTime: {
        list: [],
        index: 0,
        time: ""
      }
    };
    var date = moment("9:00 AM", this.firstJob.timeFormat);
    for(var i = 0; i <= 16; i++) {
      var time = date.format(this.firstJob.timeFormat);
      if(i < 16) this.firstJob.startTime.list.push({ key: i, value: time });
      if(i > 0) this.firstJob.endTime.list.push({ key: i, value: time });
      date = date.add(30, "minutes");
    }
    this.firstJob.startTime.index = this.firstJob.startTime.list[0].key;
    this.firstJob.startTime.time = this.firstJob.startTime.list[0].value;
    var endTimeListLength = this.firstJob.endTime.list.length;
    this.firstJob.endTime.index = this.firstJob.endTime.list[endTimeListLength - 1].key;
    this.firstJob.endTime.time = this.firstJob.endTime.list[endTimeListLength - 1].value;
    console.log(this.firstJob);
  }

}
