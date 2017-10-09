import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup-mobile',
  templateUrl: './signup-mobile.component.html',
  styleUrls: ['./signup-mobile.component.css']
})
export class SignupMobileComponent implements OnInit {
  userName: string;
  countryList: any[];
  country: string;
  phoneNumber: string;
  verifyCode: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.userName = "Jessica";
    this.countryList = [
      { key: "argentina", value: "Argentina" },
      { key: "australia", value: "Australia" },
      { key: "brazil", value: "Brazil" },
      { key: "kanada", value: "Kanada" },
      { key: "mexico", value: "Mexico" },
      { key: "taiwan", value: "Taiwan" },
      { key: "unitedstates", value: "United States" }
    ];
    this.country = this.countryList[0].key;
    this.phoneNumber = "(913) 456-1234";
    this.verifyCode = "";
  }

}
