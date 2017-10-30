import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.css']
})
export class AlertBarComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() description: string;
  @Output() dismissClicked = new EventEmitter();
  @Output() actionClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
