import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from 'app/services/account.service';
import { FormField } from 'app/classes/form-field';

@Component({
  selector: 'app-signup-mobile',
  templateUrl: './signup-mobile.component.html',
  styleUrls: ['./signup-mobile.component.css']
})
export class SignupMobileComponent implements OnInit {
  userName: string;
  countryList: any[];
  country: any;
  phoneNumber: any;
  verifyCode: any;
  working: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.userName = "Jessica";
    this.countryList = [];
    this.country = {
      name: "",
      code: ""
    };
    this.accountService.getMobileCodes().subscribe(res => {
      this.countryList = res.codes;
      this.country = {
        name: this.countryList[0].name,
        code: this.countryList[0].icc
      };
    });
    this.phoneNumber = new FormField();
    this.verifyCode = {
      input: "",
      sms: "null"
    };
  }

  countryChanged(index) {
    this.country.code = this.countryList[index].icc;
  }

  maskNumber(event) {
    if(event.key < '0' || event.key > '9') event.preventDefault();
  }

  sendCode() {
    this.phoneNumber.validate({ rule: "phone-number" });
    if(!this.phoneNumber.valid) return;
    this.working = true;
    this.accountService.confirmMobile(this.country.code + this.phoneNumber.value).subscribe(res => {
      this.verifyCode.sms = res.id
      this.working = false;
    });
  }

  verify() {
    if(this.verifyCode.input == this.verifyCode.sms) {
      this.router.navigateByUrl("signup-gender-birthday");
    }
  }

}
