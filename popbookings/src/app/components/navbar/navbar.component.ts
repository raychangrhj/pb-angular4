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
  @Input() category: string;
  @Input() loggedIn: boolean = false;
  @Input() hasAccount: boolean = false;
  @Input() activeNavItem: string = "";
  navItems: any[];
  user: any;
  profileLink: string;
  settingsLink: string;
  collapsed: boolean;
  dropdownMenuToggle: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    if(this.category == "business") {
      this.navItems = [
        { path: "business/myjobs", id: "myjobs", title: "My Jobs", notification: false },
        { path: "business/talentsearch", id: "talentsearch", title: "Talent Search", notification: false },
        { path: "business/messages", id: "messages", title: "Messages", notification: false },
        { path: "business/payments", id: "payments", title: "Payments", notification: false }
      ];
      this.user = {
        notification: true,
        avatar: "assets/images/navbar-mike.png",
        name: "Mike Howard"
      }
      this.profileLink = "profile-business";
      this.settingsLink = "javascript:void(0)";
    } else {
      this.navItems = [
        { path: "jobboard", id: "job_board", title: "Job Board", notification: false },
        { path: "bookings", id: "bookings", title: "Bookings", notification: false },
        { path: "messages", id: "messages", title: "Messages", notification: true },
        { path: "payments", id: "payments", title: "Payments", notification: false }
      ];
      this.user = {
        notification: false,
        avatar: "assets/images/navbar-jessica.png",
        name: "Jessica Davis"
      };
      this.profileLink = "profile-talent";
      this.settingsLink = "settings-talent";
    }
    
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
