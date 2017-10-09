import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-settings-talent',
  templateUrl: './settings-talent.component.html',
  styleUrls: ['./settings-talent.component.css']
})
export class SettingsTalentComponent implements OnInit {
  settingMenuList: any[];
  selectedMenu: string;
  email: string;
  phoneNumber: string;
  notificationChannelItems: any[];
  notifyMeAboutItems: any[];
  backupNotificationChannelItems: any[];
  backupNotifyMeAboutItems: any[];
  changesCount: number;

  constructor(
    private router: ActivatedRoute,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.settingMenuList = [
      {label: "Accounts", id: "accounts"},
      {label: "Availability", id: "availability"},
      {label: "Notifications", id: "notifications"},
      {label: "Important Documents", id: "important_documents"},
      {label: "Agency Connect", id: "agency_connect"},
      {label: "payments", id: "payments"}
    ];
    this.selectedMenu = this.settingMenuList[0].id;
    this.email = "jessica.davis@gmail.com";
    this.phoneNumber = "(913) 555-5555";
    this.notificationChannelItems = [
      {
        title: "Push Notifications",
        description: "Allow push notifications on your mobile device for all selected notification event types.",
        selected: true
      }, {
        title: "Emails",
        description: "Send email summaries to <b>" + this.email + "</b> for all selected notification event types.",
        selected: false
      }, {
        title: "SMS",
        description: "Send SMS text messages to <b>" + this.phoneNumber + "</b> for all selected notification event types.",
        selected: true
      }
    ];
    this.notifyMeAboutItems = [
      {
        title: "Bookings",
        description: "All updates or changes to booked or pending jobs including booking-specific tasks.",
        checked: true
      }, {
        title: "Job Listings",
        description: "Summaries of new job listings that match your profile settings.",
        checked: false
      }, {
        title: "Direct Messages",
        description: "Any direct messages between you and an agency or business.",
        checked: true
      }, {
        title: "Group Messages",
        description: "Any group messages for bookings you are involved in.",
        checked: true
      }, {
        title: "Payments",
        description: "Any new payments or changes to previous payments or payment details.",
        checked: false
      }, {
        title: "Job Invites",
        description: "Any direct invites to work a job listing from an agency or business.",
        checked: true
      }
    ];
    this.backupSettings();
  }

  menuSelected(menuId) {
    this.selectedMenu = menuId;
  }

  notificationChannelItemChanged(index) {
    this.notificationChannelItems[index].selected = !this.notificationChannelItems[index].selected;
    this.changesCount += this.notificationChannelItems[index].selected != this.backupNotificationChannelItems[index].selected ? 1 : -1;
  }

  notifyMeAboutItemChanged(index) {
    this.notifyMeAboutItems[index].checked = !this.notifyMeAboutItems[index].checked;
    this.changesCount += this.notifyMeAboutItems[index].checked != this.backupNotifyMeAboutItems[index].checked ? 1 : -1;
  }

  resumeSettings() {
    this.notificationChannelItems = [];
    this.backupNotificationChannelItems.forEach(element => {
      this.notificationChannelItems.push({ title: element.title, description: element.description, selected: element.selected });
    });
    this.notifyMeAboutItems = [];
    this.backupNotifyMeAboutItems.forEach(element => {
      this.notifyMeAboutItems.push({ title: element.title, description: element.description, checked: element.checked });
    });
    this.changesCount = 0;
  }

  backupSettings() {
    this.backupNotificationChannelItems = [];
    this.notificationChannelItems.forEach(element => {
      this.backupNotificationChannelItems.push({ title: element.title, description: element.description, selected: element.selected });
    });
    this.backupNotifyMeAboutItems = [];
    this.notifyMeAboutItems.forEach(element => {
      this.backupNotifyMeAboutItems.push({ title: element.title, description: element.description, checked: element.checked });
    });
    this.changesCount = 0;
  }

}
