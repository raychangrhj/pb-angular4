import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from 'app/services/account.service';
import { FormField } from 'app/classes/form-field';

@Component({
  selector: 'app-signup-gender-birthday',
  templateUrl: './signup-gender-birthday.component.html',
  styleUrls: ['./signup-gender-birthday.component.css']
})
export class SignupGenderBirthdayComponent implements OnInit {
  gender: string;
  birthday: any;
  working: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.gender = "M";
    this.birthday = {
      month: new FormField(),
      day: new FormField(),
      year: new FormField(),
      valid: false
    }
  }

  getGenderActive(gender) {
    return this.gender == gender ? "active" : "";
  }

  genderSelected(gender) {
    this.gender = gender;
  }

  maskNumber(event) {
    if(event.key < '0' || event.key > '9') event.preventDefault();
  }

  submit() {
    this.birthday.valid = this.birthday.month.validate({ type: "month" });
    this.birthday.valid &= this.birthday.day.validate({ type: "day" });
    this.birthday.valid &= this.birthday.year.validate({ type: "year" });
    if(!this.birthday.valid) return;
    this.working = true;
    var birthday = this.birthday.month.value + "/" + this.birthday.day.value + "/" + this.birthday.year.value;
    this.accountService.updateTalentGenderAndBirthday(this.gender, birthday).subscribe(res => {
      if(res.success) {
        if(this.birthday.valid) this.router.navigateByUrl('/signup-skill');
      } else {
        console.log("failed");
      }
      this.working = false;
    });
  }

}
