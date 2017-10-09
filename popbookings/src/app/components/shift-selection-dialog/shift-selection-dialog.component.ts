import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-shift-selection-dialog',
  templateUrl: './shift-selection-dialog.component.html',
  styleUrls: ['./shift-selection-dialog.component.css']
})
export class ShiftSelectionDialogComponent implements OnInit {
  step: number;
  jobTitle: string;

  constructor(
    public dialogRef: MdDialogRef<ShiftSelectionDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.step = 1;
    this.jobTitle = "Support Staff - Techweek KC";
  }

  dayShiftItemChanged(i) {
    this.data.shifts[i].selected = !this.data.shifts[i].selected;
  }

  timeShiftItemChanged(i, j) {
    this.data.shifts[i].times[j].selected = !this.data.shifts[i].times[j].selected;
  }

  gotoStep2() {
    var selected: boolean = false;
    this.data.shifts.forEach(shift => {
      if(shift.selected) selected = true;
    });
    if(!selected) return;
    this.step = 2;
  }

  gotoStep3() {
    var selected: boolean = false;
    this.data.shifts.forEach(shift => {
      shift.times.forEach(time => {
        if(time.selected) selected = true;
      });
    });
    if(!selected) return;
    this.data.shifts.forEach(shift => {
      shift.selectedCount = 0;
      shift.times.forEach(time => {
        if(time.selected) shift.selectedCount++;
      });
    });
    this.step = 3;
  }

  cancel() {
    this.dialogRef.close();
  }

}
