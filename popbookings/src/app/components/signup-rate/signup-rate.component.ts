import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup-rate',
  templateUrl: './signup-rate.component.html',
  styleUrls: ['./signup-rate.component.css']
})
export class SignupRateComponent implements OnInit {
  rate: number;
  rateValid: boolean;
  rateError: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.rateValid = false;
    this.rateError = "";
  }

  validateRate() {
    this.rateValid = false;
    if(this.rate) {
      if(this.rate >= 3 && this.rate <= 999) {
        this.rateValid = true;
        this.rateError = "";
      } else {
        this.rateError = "Enter in 3 to 999";
      }
    } else {
      this.rateError = "This is required";
    }
  }

}
