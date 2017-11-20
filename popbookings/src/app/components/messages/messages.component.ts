// npm install layer-websdk --save
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';
import { AccountService } from 'app/services/account.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { ConversationDetailsDialogComponent } from 'app/components/conversation-details-dialog/conversation-details-dialog.component';
import { AppSettings } from 'app/classes/app-settings';
import * as layer from 'layer-websdk';
import * as moment from 'moment';

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
  user: any;
  conversations: any[];
  currentConversation: any;
  messageType: string;
  messages: any[];

  constructor(
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService,
    private accountService: AccountService,
    public dialog: MdDialog
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
    this.messages = [];

    var that = this;
    var client = new layer.Client({
      // appId: AppSettings.LAYER_APP_ID
      appId: AppSettings.LAYER_APP_ID_OTHER
    });
    client.on("challenge", function(event) {
      // that.accountService.getIdentityTokenLayer(event.nonce).subscribe(res => {
      //   event.callback(res.identity_token);
      // });
      layer.xhr({
        url: AppSettings.LAYER_IDENTITY_PROVIDER_URL,
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        method: "POST",
        data: {
          nonce: event.nonce,
          email: AppSettings.LAYER_EMAIL,
          password: AppSettings.LAYER_PASSWORD
        }
      }, function(res) {
        if(res.success && res.data.identity_token) {
          event.callback(res.data.identity_token);
        } else {
          alert("layer login failed");
        }
      });
    });
    client.on("ready", function() {
      that.user = client.user;
      console.log(that.user);
      var conversationQuery = client.createQuery({
        model: layer.Query.Conversation,
        paginationWindow: 500
      });
      conversationQuery.on("change:data", function(event) {
        console.log(conversationQuery.data);
        if(conversationQuery.data) {
          that.conversations = conversationQuery.data;
          that.currentConversation = that.conversations[0];
        }
      });
    });
    client.connect();

    this.reset();
  }

  formatDateForConversationList(date) {
    var momentForNow = moment(new Date);
    var today = momentForNow.clone().startOf("day");
    var yesterday = momentForNow.clone().subtract(1, "days").startOf("days");
    var convertingDate = moment(date);
    if(convertingDate.isSame(today, "d")) return convertingDate.format("h:mm A");
    if(convertingDate.isSame(yesterday, "d")) return "Yesterday";
    return convertingDate.format("M/D/YY");
  }

  getParticipant(conversation) {
    var participant: any;
    if(conversation) {
      conversation.participants.forEach(e => {
        if(e.id != this.user.id) {
          participant = e;
          return;
        }
      });
    }
    return participant;
  }

  participantStatus(conversation) {
    var participant = this.getParticipant(conversation);
    return participant ? participant.status : "";
  }

  participantName(conversation) {
    var participant = this.getParticipant(conversation);
    return participant ? participant.displayName : false;
  }

  participantAvatar(conversation) {
    var participant = this.getParticipant(conversation);
    return participant ? participant.avatarUrl : "assets/images/no-avatar.png";
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

  openConversationDetailsDialog() {
    let dialogRef = this.dialog.open(ConversationDetailsDialogComponent, {
      data: {
        title: this.currentConversation.title
      }
    })
  }

}
