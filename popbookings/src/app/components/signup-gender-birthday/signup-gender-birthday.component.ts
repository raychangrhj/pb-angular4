import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-signup-gender-birthday',
  templateUrl: './signup-gender-birthday.component.html',
  styleUrls: ['./signup-gender-birthday.component.css']
})
export class SignupGenderBirthdayComponent implements OnInit {
  gender: string;
  birthday: Birthday;


  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.gender = "male";
    var now = moment();
    this.birthday = {
      month: parseInt(now.format("MM")),
      day: parseInt(now.format("DD")),
      year: parseInt(now.format("YYYY")),
      monthValid: true,
      dayValid: true,
      yearValid: true,
      valid: false
    }
  }

  getGenderActive(gender) {
    return this.gender == gender ? "active" : "";
  }

  onGenderSelected(gender) {
    this.gender = gender;
  }

  validateMonth() {
    this.birthday.monthValid = this.birthday.month >= 1 && this.birthday.month <= 12;
  }

  validateDay() {
    this.birthday.dayValid = this.birthday.day >= 1 && this.birthday.day <= 31;
  }

  validateYear() {
    this.birthday.yearValid = this.birthday.year >= 1900 && this.birthday.year <= 2100;
  }

  validateBirthday() {
    this.validateMonth();
    this.validateDay();
    this.validateYear();
    this.birthday.valid = this.birthday.monthValid && this.birthday.dayValid && this.birthday.yearValid;
  }

  onNextButtonClicked() {
    this.validateBirthday();
    if(this.birthday.valid) this.router.navigateByUrl('/signup-skill');
  }

}

interface Birthday {
  month: number;
  day: number;
  year: number;
  monthValid: boolean;
  dayValid: boolean;
  yearValid: boolean;
  valid: boolean;
}
