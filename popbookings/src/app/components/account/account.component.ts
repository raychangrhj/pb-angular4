import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  token: string;
  phoneNumber: string;
  success: string;
  id: string;

  constructor(
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.token = params.token;
      this.phoneNumber = params.phoneNumber;
    });
    if(this.token) this.confirmAccount();
  }

  confirmAccount() {
    this.dataService.getAccountData(this.token).subscribe(res => {
      console.log(res);
      this.success = res.success;
      this.id = res.id;
    });
  }

}
