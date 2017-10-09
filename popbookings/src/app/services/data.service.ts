import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getJobBoardData() {
    return [
      {
        id: "1",
        title: "Bartender - Big Xll Fan Fest",
        description: "Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more! Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more!",
        clientType: "agency",
        clientName: "Worldwide Promotions, Inc.",
        date: "March 8-10,2017",
        fullDate: "Monday, March 8 - Wednesday, March 10, 2017",
        time: "9:30AM-2:30PM",
        location: "Kansas City,MO",
        jobType: "invited",
        rateValue: "26-32",
        rateUnit: "hour"
      }, {
        id: "2",
        title: "Promo Rep - St Patty's Day Parade",
        description: "Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more! Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more!",
        clientType: "agency",
        clientName: "Supreme Talent",
        date: "March 8-10,2017",
        fullDate: "Monday, March 8 - Wednesday, March 10, 2017",
        time: "9:30AM-2:30PM",
        location: "Kansas City,MO",
        jobType: "apply",
        rateValue: "150",
        rateUnit: "day"
      }, {
        id: "3",
        title: "Product Rep - Boulevard Nights",
        description: "Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more! Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more!",
        clientType: "business",
        clientName: "Boulevard Brewing Co.",
        date: "March 8-10,2017",
        fullDate: "Monday, March 8 - Wednesday, March 10, 2017",
        time: "9:30AM-2:30PM",
        location: "Kansas City,MO",
        jobType: "apply",
        rateValue: "24",
        rateUnit: "hour"
      }, {
        id: "4",
        title: "Wait - Charity Luncheon",
        description: "Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more! Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more!",
        clientType: "business",
        clientName: "Unbound",
        date: "March 8-10,2017",
        fullDate: "Monday, March 8 - Wednesday, March 10, 2017",
        time: "9:30AM-2:30PM",
        location: "Blue Springs,MO",
        jobType: "pending",
        rateValue: "17",
        rateUnit: "hour"
      }, {
        id: "5",
        title: "Support Staff - Techweek KC",
        description: "Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more! Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more!",
        clientType: "business",
        clientName: "Techweek, Inc.",
        date: "March 8-10,2017",
        fullDate: "Monday, March 8 - Wednesday, March 10, 2017",
        time: "9:30AM-2:30PM",
        location: "Kansas City,MO",
        jobType: "apply",
        rateValue: "30",
        rateUnit: "hour"
      }, {
        id: "6",
        title: "Support Staff - Techweek KC",
        description: "Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more! Techweek 2016 will be bigger and better than ever combining content focus on technology and entrepreneurism. Techweek is a weeklong festival featuring the Big Data Summit, Launch KC Grant competition, networking events, a hiring fair, a hackathon and many more!",
        clientType: "business",
        clientName: "Techweek, Inc.",
        date: "March 8-10,2017",
        fullDate: "Monday, March 8 - Wednesday, March 10, 2017",
        time: "9:30AM-2:30PM",
        location: "Kansas City,MO",
        jobType: "invited",
        rateValue: "30",
        rateUnit: "hour"
      }
    ];
  }

  getBookingData() {
    return [
      {
        id: "1",
        title: "Bartender - Big Xll Fan Fest",
        clientType: "agency",
        clientName: "Worldwide Promotions, Inc.",
        date: "March 8-10,2017",
        time: "9:30AM-2:30PM",
        location: "Kansas City,MO",
        jobType: "pending",
        notification: true,
        rateValue: "26-32",
        rateUnit: "hour"
      }, {
        id: "2",
        title: "Promo Rep - St Patty's Day Rarade",
        clientType: "agency",
        clientName: "Supreme Talent",
        date: "March 18-20,2017",
        time: "9:30AM-2:30PM",
        location: "Kansas City,Mo",
        jobType: "booked",
        notification: true,
        rateValue: "150",
        rateUnit: "day"
      }, {
        id: "3",
        title: "Product Rep - Boulevard Nights",
        clientType: "business",
        clientName: "Boulevard Brewing Co.",
        date: "March 8-9,2017",
        time: "9:30AM-2:30PM",
        location: "Nashville",
        jobType: "booked",
        notification: false,
        rateValue: "24",
        rateUnit: "hour"
      }, {
        id: "4",
        title: "Wait Staff - Charity Luncheon",
        clientType: "business",
        clientName: "Unbound",
        date: "March 8-10,2017",
        time: "9:30AM-2:30PM",
        location: "Altanta",
        jobType: "pending",
        notification: false,
        rateValue: "17",
        rateUnit: "hour"
      }, {
        id: "5",
        title: "Support Staff - Techweek KC",
        clientType: "business",
        clientName: "Techweek, Inc.",
        date: "March 8-10,2017",
        time: "9:30AM-2:30PM",
        location: "San Antonio",
        jobType: "booked",
        notification: true,
        rateValue: "30",
        rateUnit: "hour"
      }
    ];
  }

  getBookingEventData() {
    return [
      {
        type: "Invited",
        dateList: ["2017-09-28", "2017-09-30", "2017-10-02", "2017-10-08", "2017-10-12", "2017-10-18"]
      }, {
        type: "Booked",
        dateList: ["2017-09-21", "2017-09-28", "2017-10-05", "2017-10-28"]
      }, {
        type: "Pending",
        dateList: ["2017-09-24", "2017-09-28", "2017-10-01", "2017-10-11"]
      }, {
        type: "Travel",
        duringList: [
          { startDate: "2017-09-26", endDate: "2017-09-29" },
          { startDate: "2017-10-07", endDate: "2017-10-11" }
        ]
      }, {
        type: "Offline",
        dateList: ["2017-09-25", "2017-09-26", "2017-09-27"]
      }
    ];
  }

  getBookingHistoryData() {
    return [
      {
        title: "Model - PopBookings",
        date: "Jan. 19, 2017",
        comment: "This was our third time hiring Jessica as a model and we can definitely vouch for her professionalism and amazing attitude. We will continue to use her as often as we can!",
        rating: 4
      }, {
        title: "Brand Ambassador - PopBookings",
        date: "Jan. 19, 2017",
        comment: "This was our third time hiring Jessica as a model and we can definitely vouch for her professionalism and amazing attitude. We will continue to use her as often as we can!",
        rating: 4.5
      }, {
        title: "Brand Ambassador - PopBookings",
        date: "Dec. 21, 2016",
        comment: "This was our third time hiring Jessica as a model and we can definitely vouch for her professionalism and amazing attitude. We will continue to use her as often as we can!",
        rating: 3.5
      }, {
        title: "Model - PopBookings",
        date: "Jan. 19, 2017",
        comment: "This was our third time hiring Jessica as a model and we can definitely vouch for her professionalism and amazing attitude. We will continue to use her as often as we can!",
        rating: 4
      }, {
        title: "Model - PopBookings",
        date: "Jan. 19, 2017",
        comment: "This was our third time hiring Jessica as a model and we can definitely vouch for her professionalism and amazing attitude. We will continue to use her as often as we can!",
        rating: 4
      }
    ];
  }

  getShiftData() {
    return [
      { day: 8,
        date: "Friday,March 8,2017",
        selected: false,
        selectedCount: 0,
        times: [
          { time: "9:00AM - 11:00AM", selected: false },
          { time: "11:00AM - 1:00PM", selected: false },
          { time: "1:00PM - 3:00PM", selected: false }
        ]
      }, {
        day: 9,
        date: "Saturday,March 9,2017",
        selected: false,
        selectedCount: 0,
        times: [
          { time: "9:00AM - 11:00AM", selected: false },
          { time: "11:00AM - 1:00PM", selected: false },
          { time: "1:00PM - 3:00PM", selected: false }
        ]
      }, {
        day: 10,
        date: "Sunday,March 10,2017",
        selected: false,
        selectedCount: 0,
        times: [
          { time: "9:00AM - 11:00AM", selected: false },
          { time: "11:00AM - 1:00PM", selected: false },
          { time: "1:00PM - 3:00PM", selected: false }
        ]
      }
    ];
  }

}
