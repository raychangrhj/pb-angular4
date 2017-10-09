import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class NavbarComponent implements OnInit {
  @Input() loggedIn: boolean = false;
  @Input() hasAccount: boolean = false;
  @Input() activeNavItem: string = "";
  navItems: [NavItem];
  collapsed: boolean;
  dropdownMenuToggle: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.navItems = [
      { path: "jobboard", id: "job_board", title: "Job Board", notification: false },
      { path: "bookings", id: "bookings", title: "Bookings", notification: false },
      { path: "messages", id: "messages", title: "Messages", notification: true },
      { path: "payments", id: "payments", title: "Payments", notification: false }
    ];
    this.collapsed = false;
    this.dropdownMenuToggle = false;
  }

  onClick(event) {
    var dropdownButton = this.elementRef.nativeElement.querySelector(".dropdown-button");
    if(dropdownButton && dropdownButton.contains(event.target)) {
      this.dropdownMenuToggle = !this.dropdownMenuToggle;
    } else {
      this.dropdownMenuToggle = false;
    }
  }
}

interface NavItem {
  path: string;
  id: string;
  title: string;
  notification: boolean;
}
