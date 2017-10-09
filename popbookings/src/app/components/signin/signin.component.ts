import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email);
    console.log(this.password);
  }

}
