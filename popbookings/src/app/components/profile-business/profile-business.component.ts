import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-profile-business',
  templateUrl: './profile-business.component.html',
  styleUrls: ['./profile-business.component.css']
})
export class ProfileBusinessComponent implements OnInit {
  companyLogo: string;
  clientPhoto: string;
  clientName: string;
  companyName: string;
  companyRating: number;
  statistics; any;
  phoneNumber: string;
  siteUrl: string;
  location: any;
  about: string;
  aboutAllVisible: boolean;
  bookingHistoryList: any[];
  bookingHistoryAllVisible: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.companyLogo = "assets/images/hero-image.png";
    this.clientPhoto = "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png";
    this.clientName = "Mike H.";
    this.companyName = "Boulevard Brewing Co.";
    this.companyRating = 4.5;
    this.statistics = [
      { value: "8", title: "Bookings" },
      { value: "276.5", title: "Hours Booked" },
      { value: "$50k +", title: "Total Paid" }
    ];
    this.phoneNumber = "(913) 555-5555";
    this.siteUrl = "www.boulevard.com";
    this.location = {
      street: "1401 w Main",
      city: "Kansas City,MO 64105"
    };
    this.about = "Boulevard Brewing Company has grown to be the largest specialty brewer in the Midwest, with full or partial distribution currently in 31 states and Washington DC. Since 1989 our brewery has remained dedicated to the craft of producing fresh, flavorful beers using traditional ingredients and the best. Boulevard Brewing Company has grown to be the largest specialty brewer in the Midwest, with full or partial distribution currently in 31 states and Washington DC. Since 1989 our brewery has remained dedicated to the craft of producing fresh, flavorful beers using traditional ingredients and the best.";
    this.aboutAllVisible = false;
    this.bookingHistoryList = this.dataService.getBookingHistoryForClientData();
    this.bookingHistoryAllVisible = false;
  }

}
