import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { ContractorAgreementDialogComponent } from 'app/components/contractor-agreement-dialog/contractor-agreement-dialog.component';

@Component({
  selector: 'app-settings-talent',
  templateUrl: './settings-talent.component.html',
  styleUrls: ['./settings-talent.component.css'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class SettingsTalentComponent implements OnInit {
  lightBlueAlertVisible: boolean;
  blueAlertVisible: boolean;
  yellowAlertVisible: boolean;
  settingMenuList: any[];
  selectedMenu: string;
  accounts: any[];
  available: boolean;
  location: string;
  travelData: any[];
  unavailableDates: string[];
  email: string;
  phoneNumber: string;
  notificationChannelItems: any[];
  notifyMeAboutItems: any[];
  backupNotificationChannelItems: any[];
  backupNotifyMeAboutItems: any[];
  changesCount: number;
  importantDocuments: any[];
  agencySearchString: string;
  agencyItemId: string;
  agencyList: any[];
  searchedAgencyList: any[];
  connectedAgencyList: any[];
  pendingRequestList: any[];
  agencyConnectionSidenavVisible: boolean;
  connectingAgency: any;
  applicationAgency: any;
  agencyApplicationVisible: boolean;
  agencyApplicationData: any;
  paymentInfo: any;

  constructor(
    private elementRef: ElementRef,
    private router: ActivatedRoute,
    private commonService: CommonService,
    private dataService: DataService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.lightBlueAlertVisible = true;
    this.blueAlertVisible = true;
    this.yellowAlertVisible = true;
    this.settingMenuList = [
      {label: "Accounts", id: "accounts"},
      {label: "Availability", id: "availability"},
      {label: "Notifications", id: "notifications"},
      {label: "Important Documents", id: "important_documents"},
      {label: "Agency Connect", id: "agency_connect"},
      {label: "Payments", id: "payments"}
    ];

    this.accounts = [
      {
        type: "facebook",
        title: "Facebook",
        link: "www.facebook.com/jessica.davis",
        status: true
      }, {
        type: "google",
        title: "Google",
        link: "",
        status: false
      }, {
        type: "email",
        title: "Email",
        link: "",
        status: false
      }
    ];
    this.available = true;
    this.location = "Kansas City,MO";
    this.travelData = [
      {
        target: "Miami,FL",
        date: "March 9-11,2017",
        destination: "Las Vegas,NV",
        startDate: new Date(),
        endDate: new Date()
      }, {
        target: "Miami,FL",
        date: "July 15-19,2017",
        destination: "Las Vegas,NV",
        startDate: new Date(),
        endDate: new Date()
      }
    ];
    this.unavailableDates = [ "March 3-7,2018", "March 26-28,2018" ];
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

    this.importantDocuments = [
      {
        title: "General",
        collapsed: true,
        documents: [
          { title: "W-9*", data: "W9_2017.png" },
          { title: "Driver's License*", data: "" }
        ]
      }, {
        title: "Talent Pros, Inc.",
        collapsed: true,
        documents: [
          { title: "Independent Contractor Agreement", data: "ICA_0909_2017.png" }
        ]
      }, {
        title: "United Talent Agency",
        collapsed: false,
        documents: [
          { title: "A", data: "" },
          { title: "B", data: "b.png" },
          { title: "C", data: "c.png" }
        ]
      }, {
        title: "Supreme Talent USA",
        collapsed: false,
        documents: [
          { title: "A", data: "a.png" },
          { title: "B", data: "" }
        ]
      }
    ];
    this.agencySearchString = "";
    this.agencyItemId = "";
    this.agencyList = [
      {
        logo: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
        title: "United Talent Agency",
        rating: 4
      }, {
        logo: "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
        title: "Worldwide Promotions, Inc.",
        rating: 4.5
      }, {
        logo: "https://cdn.okccdn.com/media/img/emojis/apple/1F602.png",
        title: "Supreme Talent",
        rating: 5
      }
    ];
    this.searchedAgencyList = [];
    this.connectedAgencyList = [
      {
        id: "1",
        logo: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
        title: "Worldwide Promotions, Inc.",
        rating: 4.5
      }, {
        id: "2",
        logo: "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
        title: "Supreme Talent",
        rating: 4
      }
    ];
    this.pendingRequestList = [
      {
        id: "3",
        logo: "https://cdn.okccdn.com/media/img/emojis/apple/1F602.png",
        title: "Talent Professional U.S.A.",
        rating: 4.5
      }
    ];
    this.agencyConnectionSidenavVisible = false;
    this.paymentInfo = {
      editing: false,
      bank: "Landmark National Bank - Personal Checking",
      account: "Account Ending - 5344",
      routingNumber: "",
      accountNumber: "",
      accountNumberConfirm: ""
    };

    this.menuSelected(this.settingMenuList[0].id);
  }

  onClick(event) {
    this.agencyItemId = "";
    var detailButtons = this.elementRef.nativeElement.querySelectorAll(".btn-detail");
    for (var i = 0; i < detailButtons.length; i++) {
      var detailButton = detailButtons[i];
      if(detailButton.contains(event.target)) {
        this.agencyItemId = detailButton.attributes.agencyId.value;
      }
    }
  }

  onLightBlueAlertDismiss() {
    this.lightBlueAlertVisible = false;
  }

  onLightBlueAlertAction() {
    this.lightBlueAlertVisible = false;
  }

  menuSelected(menuId) {
    this.selectedMenu = menuId;
    this.agencyApplicationVisible = false;
    this.agencyApplicationData = {
      changed: false,
      w9: "",
      driverLicense: ""
    };
    this.resumeSettings();
  }

  saveTravelData(index) {
    console.log(this.travelData[index]);
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

  uploadImportantDocumentData(event, i, j) {
    this.importantDocuments[i].documents[j].data = event.target.files[0].name;
    event.target.value = "";
  }

  agencySearchKeyupEvent(event) {
    if(event.key == "Enter") this.searchAgency();
  }

  searchAgency() {
    this.searchedAgencyList = this.agencyList.filter(agency => this.commonService.contains(agency.title, this.agencySearchString));
  }

  openAgencyConnectionDialog(selectedAgency) {
    this.connectingAgency = selectedAgency;
    this.connectingAgency.statistics = [
      { value: "8", title: "Bookings" },
      { value: "142.5", title: "Hours Booked" },
      { value: "$4,000 +", title: "Total Paid" }
    ];
    this.connectingAgency.about = "Boulevard Brewing Company has grown to be the largest specialty brewer in the Midwest, with full or partial distribution currently in 31 states and Washington DC. Since 1989 our brewery has remained dedicated to the craft of producing fresh, flavorful beers using traditional ingredients and the best. Boulevard Brewing Company has grown to be the largest specialty brewer in the Midwest, with full or partial distribution currently in 31 states and Washington DC. Since 1989 our brewery has remained dedicated to the craft of producing fresh, flavorful beers using traditional ingredients and the best.";
    this.connectingAgency.aboutAllVisible = false;
    this.connectingAgency.bookingHistoryList = this.dataService.getBookingHistoryForClientData();
    this.connectingAgency.bookingHistoryAllVisible = false;
    this.agencyConnectionSidenavVisible = true;
  }

  deleteAgencyApplicationData(data) {
    this.agencyApplicationData[data] = "";
    this.agencyApplicationData.changed = true;
  }

  uploadAgencyApplicationData(event, data) {
    this.agencyApplicationData[data] = event.target.files[0].name;
    this.agencyApplicationData.changed = true;
    event.target.value = "";
  }

  submitAgencyApplicationData() {
    let dialogRef = this.dialog.open(ContractorAgreementDialogComponent, {
      data: { data: "" }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.agencyApplicationData.changed = false;
    });
  }

}
