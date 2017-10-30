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
  filterContainerVisible: boolean;
  filterMessageList: any[];
  filterBookingList: any[];
  filterOtherList: any[];
  filterMessage: string;
  filterBooking: string;
  filterOther: string;
  searchString: string;
  conversations: any[];
  currentConversation: any;
  messageType: string;
  messages: any[];

  constructor(
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterContainerVisible = false;
    this.filterMessageList = [
      { key: "", value: "All Messages" },
      { key: "direct", value: "Direct Messages" },
      { key: "group", value: "Group Messages" }
    ];
    this.filterBookingList = [
      { key: "", value: "All Bookings" },
      { key: "pending", value: "Pending" },
      { key: "paid", value: "Paid" }
    ];
    this.filterOtherList = [ "A", "B", "C" ];
    this.conversations = [
      {
        id: "1",
        type: "direct",
        title: "Wait Staff - Charity Luncheon",
        date: "4:32 PM",
        members: 0,
        name: "Sheila R.",
        company: "Unbound",
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
        lastMessage: "Welcome to the team! Be on the lookout for news and update",
        live: true,
      }, {
        id: "2",
        type: "direct",
        title: "Bartender - Big Xll Fan Fest",
        date: "11:39 AM",
        members: 0,
        name: "Mike H.",
        company: "Worldwide Promotions, Inc.",
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
        lastMessage: "Congrats! You've been invited to join our team at the 2017",
        live: false
      }, {
        id: "3",
        type: "direct",
        title: "Your Password Reset",
        date: "Yesterday",
        members: 0,
        name: "Sarah T.",
        company: "PopBookings Support",
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F602.png",
        lastMessage: "All Set! We've updated your login credentials and sent a",
        live: true
      }, {
        id: "4",
        type: "group",
        title: "Group Chat - Big Xll Fan Fest",
        date: "12/30/16",
        members: 12,
        name: "Mike H.",
        company: "",
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F603.png",
        lastMessage: "Hey all, just a reminder that the training conference call is",
        live: false
      }, {
        id: "5",
        type: "direct",
        title: "Support Staff - Techweek KC",
        date: "11/23/16",
        members: 0,
        name: "Stacy W.",
        company: "Techweek, Inc",
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F604.png",
        lastMessage: "Thank you! You did a fantastic job on our event and look for",
        live: false
      }, {
        id: "6",
        type: "group",
        title: "Worldwide Promotions",
        date: "11/23/16",
        members: 346,
        name: "Mike H.",
        company: "",
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F605.png",
        lastMessage: "Yes, we will need a few documents signed and returned a",
        live: false
      }
    ];
    this.currentConversation = this.conversations[0];
    this.messageType = "direct";
    this.messages = [
      {
        type: "receiver",
        first: true,
        last: false,
        user: { name: "", avatar: "" },
        date: "Wed, Feb 25, 2017 6:10 PM",
        message: "Congrats! You've been invited to join our team at the 2017 Big Xll Fan Fest."
      }, {
        type: "receiver",
        first: false,
        last: true,
        user: { name: "Mike H.", avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png" },
        date: "",
        message: "Please visit the job detail page to accept our invitaion and select your shifts."
      }, {
        type: "sender",
        first: false,
        last: true,
        user: { name: "", avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png" },
        date: "",
        message: "Thank you! I am looking forward to it."
      }
    ];

    this.reset();
  }

  reset() {
    this.filterMessage = this.filterMessageList[0].key;
    this.filterBooking = this.filterBookingList[0].key;
    this.filterOther = this.filterOtherList[0];
    this.searchString = "";
  }

  update() {
    this.filterContainerVisible = false;
  }

  search(event) {
    if(event.key == "Enter") this.update();
  }

}
