import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

}
