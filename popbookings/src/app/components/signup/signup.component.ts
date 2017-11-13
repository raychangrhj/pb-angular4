import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from 'app/services/account.service';
import { FormField } from 'app/classes/form-field';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  currentView: string;
  currentTab: number;
  workUser: any;
  hireUser: any;
  manageUser: any;
  working: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.currentView = params.view;
    });
    this.currentTab = this.currentView === "manage" ? 2 : this.currentView == "hire" ? 1 : 0;
    this.workUser = {
      firstName: new FormField(),
      lastName: new FormField(),
      email: new FormField(),
      password: new FormField(),
      valid: false
    };
    this.hireUser = {
      firstName: new FormField(),
      lastName: new FormField(),
      companyName: new FormField(),
      email: new FormField(),
      password: new FormField(),
      valid: false
    };
    this.manageUser = {
      firstName: new FormField(),
      lastName: new FormField(),
      companyName: new FormField(),
      email: new FormField(),
      password: new FormField(),
      valid: false
    };
  }

  onLinkClick($event) {
    switch($event.index) {
      case 0:
        this.currentView = "work";
        break;
      case 1:
        this.currentView = "hire";
        break;
      case 2:
        this.currentView = "manage";
        break;
    }
  }

  resendEmail() { }

  submitWorkForm(event) {
    this.workUser.valid = this.workUser.firstName.validate();
    this.workUser.valid &= this.workUser.lastName.validate();
    this.workUser.valid &= this.workUser.email.validate({ type: "email" });
    this.workUser.valid &= this.workUser.password.validate({ type: "password" });
    if(!this.workUser.valid) return;
    this.working = true;
    this.accountService.registerTalent(this.workUser).subscribe(res => {
      if(res.success) {
        this.currentView = 'work-3';
      } else {
        console.log("failed");
      }
      this.working = false;
    });
  }

  submitHireForm() {
    this.hireUser.valid = this.hireUser.firstName.validate();
    this.hireUser.valid &= this.hireUser.lastName.validate();
    this.hireUser.valid &= this.hireUser.companyName.validate();
    this.hireUser.valid &= this.hireUser.email.validate({ type: "email" });
    this.hireUser.valid &= this.hireUser.password.validate({ type: "password" });
    if(!this.hireUser.valid) return;
    this.working = true;
  }

  submitManageForm() {
    this.manageUser.valid = this.manageUser.firstName.validate();
    this.manageUser.valid &= this.manageUser.lastName.validate();
    this.manageUser.valid &= this.manageUser.companyName.validate();
    this.manageUser.valid &= this.manageUser.email.validate({ type: "email" });
    this.manageUser.valid &= this.manageUser.password.validate({ type: "password" });
    if(!this.manageUser.valid) return;
    this.working = true;
  }

}
