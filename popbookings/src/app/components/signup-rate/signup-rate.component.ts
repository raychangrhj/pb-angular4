import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from 'app/services/account.service';
import { FormField } from 'app/classes/form-field';

@Component({
  selector: 'app-signup-rate',
  templateUrl: './signup-rate.component.html',
  styleUrls: ['./signup-rate.component.css']
})
export class SignupRateComponent implements OnInit {
  rate: any;
  working: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.rate = new FormField();
  }

  validateRate() {
    return this.rate.validate({ type: "rate" });
  }

  submit() {
    if(!this.validateRate()) return;
    this.working = true;
    this.accountService.updateTalentRate(this.rate.value).subscribe(res => {
      if(res.success) {
        this.router.navigateByUrl("/signup-photo");
      }
      this.working = false;
    });
  }

}
