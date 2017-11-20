import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  response: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    var token: string;
    var hint: string;
    this.activatedRoute.params.subscribe(params => {
      var tokenLength = params.Token.length;
      var paddingCount = (4 - tokenLength % 4) % 4;
      token = params.Token + "=".repeat(paddingCount);
      hint = params.Hint;
    });
    if(token) this.confirmAccount(token, hint);
  }

  confirmAccount(token, hint) {
    this.accountService.confirmAccount(token, hint).subscribe(res => {
      if(res.success && res.id) {
        this.accountService.token = res.id;
        this.router.navigateByUrl("signup-mobile");
      }
    });
  }

}
