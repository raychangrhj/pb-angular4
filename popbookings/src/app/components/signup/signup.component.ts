import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  currentView: string;
  currentTab: number;
  workUser: UserInfo;
  hireUser: UserInfo;
  manageUser: UserInfo;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.currentView = this.activatedRoute.snapshot.params.view;
    if(!this.currentView) this.currentView = "work-1";
    this.currentTab = this.currentView === "manage-1" ? 2 : this.currentView == "hire-1" ? 1 : 0;
    this.workUser = {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: ""
    }
    this.hireUser = {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: ""
    }
    this.manageUser = {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: ""
    }
  }

  onLinkClick($event) {
    switch($event.index) {
      case 0:
        this.currentView = "work-1";
        break;
      case 1:
        this.currentView = "hire-1";
        break;
      case 2:
        this.currentView = "manage-1";
        break;
    }
  }

}

interface UserInfo {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
}
