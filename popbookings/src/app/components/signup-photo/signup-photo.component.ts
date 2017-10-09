import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup-photo',
  templateUrl: './signup-photo.component.html',
  styleUrls: ['./signup-photo.component.css']
})
export class SignupPhotoComponent implements OnInit {
  photoCount: number;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.photoCount = 0;
  }

  public handleEvent(data: any) {
    this.photoCount = data;
  }

}
