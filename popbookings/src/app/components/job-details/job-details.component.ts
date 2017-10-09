import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/services/common.service';
import { DataService } from 'app/services/data.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { ShiftSelectionDialogComponent } from 'app/components/shift-selection-dialog/shift-selection-dialog.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobDetail: any;
  jobDetailAllVisible: boolean;
  client: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.jobDetail = this.dataService.getJobBoardData().filter(job => job.id == this.activatedRoute.snapshot.params.id)[0];
    this.jobDetailAllVisible = false;
    this.client = {
      companyLogo: "https://cdn.okccdn.com/media/img/emojis/apple/1F600.png",
      companyTitle: "Techweek, Inc.",
      companyRating: 4.5,
      managerPhoto: "https://cdn.okccdn.com/media/img/emojis/apple/1F601.png",
      managerName: "Stacy W. - Event Coordinator"
    };
  }

  openShiftSeletionDialog() {
    let dialogRef = this.dialog.open(ShiftSelectionDialogComponent, {
      data: { shifts: this.dataService.getShiftData() }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
