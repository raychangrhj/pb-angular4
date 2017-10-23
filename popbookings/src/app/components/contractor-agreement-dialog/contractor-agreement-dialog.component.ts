import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contractor-agreement-dialog',
  templateUrl: './contractor-agreement-dialog.component.html',
  styleUrls: ['./contractor-agreement-dialog.component.css']
})
export class ContractorAgreementDialogComponent implements OnInit {
  content: string;

  constructor(
    public dialogRef: MdDialogRef<ContractorAgreementDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.content = "<br>APPLE INC.<br>iOS SOFTWARE LICENSE AGREEMENT<br>Single Use License<br><br>PLEASE READ THIS SOFTWARE LICENSE AGREEMENT ('LICENSE') CAREFULLY BEFORE USING YOUR iOS DEVICE OR DOWNLOADING THE SOFTWARE UPDATE ACCOMPANYING THE LICENSE. BY USING YOUR iOS DEVICE OR DOWNLOADING A SOFTWARE UPDATE, AS APPLICABLE, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE. IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT USE THE iOS DEVICE OR DOWNLOAD THE SOFTWARE UPDATE.<br><br>IF YOU HAVE RECENTLY PURCHASED AN iOS DEVICE AND YOU DO NOT AGREE TO THE TERMS OF THE LICENSE, YOU MAY RETURN THE iOS";
  }

  disagree() {
    this.dialogRef.close();
  }

  agree() {
    this.dialogRef.close();
  }

}
