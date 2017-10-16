import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-agency-connection-dialog',
  templateUrl: './agency-connection-dialog.component.html',
  styleUrls: ['./agency-connection-dialog.component.css']
})
export class AgencyConnectionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<AgencyConnectionDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

}
