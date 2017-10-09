import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {
  date: moment.Moment;
  rows: number[];
  cols: number[];
  day: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.date = moment();
    this.rows = [0, 1, 2, 3, 4, 5];
    this.cols = [0, 1, 2, 3, 4, 5, 6];
    this.day = [[], [], [], [], [], []];
    this.update();
  }

  moveToMonthByDiff(diffMonth) {
    var year = this.date.format("YYYY");
    var month = this.date.format("MMMM");
    this.date = moment(year + "-" + month + "-15", "YYYY-MMMM-DD");
    this.date.add(diffMonth * 30, "day");
    this.update();
  }

  update() {
    var year = this.date.format("YYYY");
    var month = this.date.format("MMMM");
    var date = moment(year + "-" + month + "-01", "YYYY-MMMM-DD");
    date.add(-date.format("D") + 1, "day");
    var diffDay = (date.weekday() + 6) % 7;
    if(diffDay == 0) diffDay += 7;
    date.add(-diffDay, "day");
    this.rows.forEach(row => {
      this.cols.forEach(col => {
        this.day[row][col] = {
          day: date.format("D"),
          date: date.format("YYYY-MM-DD"),
          class: date.format("YYYY") != year || date.format("MMMM") != month ? "outside" : "",
          id: row + "-" + col
        };
        date.add(1, "day");
      });
    });
    this.renderBookingEvents();
  }

  renderBookingEvents() {
    this.dataService.getBookingEventData().forEach(element => {
      var bookingType = element.type;
      if(bookingType == "Travel") {
        element["duringList"].forEach(e => {
          this.addTravelEvent(e.startDate, e.endDate);
        });
      } else {
        element["dateList"].forEach(e => {
          this.addClassToDayOfDate(moment(e), bookingType.toLowerCase());
        });
      }
    });
  }

  addTravelEvent(startDate: string, endDate: string) {
    var minMoment = moment(this.day[0][0].date);
    var maxMoment = moment(this.day[5][6].date);
    var startMoment = moment(startDate);
    var endMoment = moment(endDate);
    if(startMoment.isBefore(minMoment)) startMoment = minMoment.add(-1, "day");
    if(endMoment.isAfter(maxMoment)) endMoment = maxMoment.add(1, "day");
    this.addClassToDayOfDate(startMoment, "travel-start");
    while(true) {
      startMoment.add(1, "day");
      if(startMoment.isSameOrAfter(endMoment)) break;
      this.addClassToDayOfDate(startMoment, "travel");
    }
    this.addClassToDayOfDate(endMoment, "travel-end");
  }

  addClassToDayOfDate(date: moment.Moment, className: string) {
    this.rows.forEach(row => {
      this.cols.forEach(col => {
        var day = this.day[row][col];
        if(day.date == date.format("YYYY-MM-DD")) {
          day.class += " " + className;
        }
      });
    });
  }

}
