// npm install ngx-carousel --save
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-profile-talent',
  templateUrl: './profile-talent.component.html',
  styleUrls: ['./profile-talent.component.css']
})
export class ProfileTalentComponent implements OnInit {
  carousel: any;
  photoUrls: string[];
  firstName: string;
  lastName: string;
  hourlyRate: number;
  overview: string;
  rating: number;
  profileRankVisible: boolean;
  profileRank: number;
  statistics: any[];
  about: string;
  aboutAllVisible: boolean;
  bookingHistoryList: any[];
  bookingHistoryAllVisible: boolean;
  skills: string[];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.carousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: true,
      touch: true,
      loop: true,
      custome: "banner"
    };
    this.photoUrls = [
      "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
      "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
      "https://cdn.okccdn.com/media/img/emojis/apple/1F602.png",
      "https://cdn.okccdn.com/media/img/emojis/apple/1F603.png",
      "https://cdn.okccdn.com/media/img/emojis/apple/1F604.png",
      "https://cdn.okccdn.com/media/img/emojis/apple/1F605.png"
    ];
    this.firstName = "Jessica";
    this.lastName = "Davis";
    this.hourlyRate = 29;
    this.overview = "Hey guys! I have been modeling for over 5 years and I've worked in the service industry for 3 years.";
    this.rating = 4.5;
    this.profileRankVisible = true;
    this.profileRank = 80;
    this.statistics = [
      { value: "8", title: "Bookings" },
      { value: "142.5", title: "Hours Worked" },
      { value: "$4,000 +", title: "Total Earned" }
    ];
    this.about = "Hi, I'm Jessica! This is an extended 'About Me' blurb to fill some space and look nice. This is some more awesome stuff about me and I can't wait to work for you! This is the longer version of an about me blurb to see what its like to take up more space here. This section write up can be really long and thorough and will truncate here if it gets too. Hi, I'm Jessica! This is an extended 'About Me' blurb to fill some space and look nice. This is some more awesome stuff about me and I can't wait to work for you! This is the longer version of an about me blurb to see what its like to take up more space here. This section write up can be really long and thorough and will truncate here if it gets too.";
    this.aboutAllVisible = false;
    this.bookingHistoryList = this.dataService.getBookingHistoryData();
    this.bookingHistoryAllVisible = false;
    this.skills = ["Waitress", "Model", "Brand Ambassador", "General Staff", "Event Manager", "Field Manager"];
  }

}
