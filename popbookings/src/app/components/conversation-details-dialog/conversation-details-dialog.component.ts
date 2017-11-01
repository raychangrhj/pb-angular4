import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-conversation-details-dialog',
  templateUrl: './conversation-details-dialog.component.html',
  styleUrls: ['./conversation-details-dialog.component.css']
})
export class ConversationDetailsDialogComponent implements OnInit {
  jobTitle: string;
  direct: any;
  group: any[];
  groupAllVisible: boolean;

  constructor(
    public dialogRef: MdDialogRef<ConversationDetailsDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.jobTitle = this.data.title;
    this.direct = {
      avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
      name: "Mike Harris"
    };
    this.group = [
      {
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
        name: "James Blake"
      }, {
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F602.png",
        name: "Christina Dawson"
      }, {
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F603.png",
        name: "Elizabeth Dwyer"
      }, {
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F604.png",
        name: "Christina Dawson"
      }, {
        avatar: "https://cdn.okccdn.com/media/img/emojis/apple/1F605.png",
        name: "Elizabeth Dwyer"
      }
    ];
    this.groupAllVisible = false;
  }

}
