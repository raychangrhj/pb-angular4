import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-profile-edit-talent',
  templateUrl: './profile-edit-talent.component.html',
  styleUrls: ['./profile-edit-talent.component.css']
})
export class ProfileEditTalentComponent implements OnInit {
  photoCount: number;
  firstName: any;
  lastName: any;
  gender: any;
  birthday: any;
  profileRankVisible: boolean;
  profileRank: number;
  statistics: any[];
  headline: any;
  description: any;
  resumeFileName: string;
  bookingHistoryList: any[];
  bookingHistoryAllVisible: boolean;
  skills: string[];
  changesCount: number;

  constructor(
    private elementRef: ElementRef,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.photoCount = 0;
    this.firstName = { value: "Jessica", changed: false };
    this.lastName = { value: "Davis", changed: false };
    this.gender = { value: "Female", changed: false };
    this.birthday = { value: "12/18/86", changed: false };
    this.profileRankVisible = true;
    this.profileRank = 80;
    this.statistics = [
      { value: "8", title: "Bookings" },
      { value: "142.5", title: "Hours Worked" },
      { value: "$4,000 +", title: "Total Earned" }
    ];
    this.headline = {
      value: "Hey guys! I have been modeling for over 5 years and I've worked in the service industry for 3 years.",
      changed: false
    };
    this.description = {
      value: "Hi, I'm Jessica! This is an extended 'About Me' blurb to fill some space and look nice. This is some more awesome stuff about me and I can't wait to work for you! This is the longer version of an about me blurb to see what its like to take up more space here. This section write up can be really long and thorough and will truncate if too long.",
      changed: false
    };
    this.resumeFileName = "JD_resume2017.pdf";
    this.bookingHistoryList = this.dataService.getBookingHistoryData();
    this.bookingHistoryAllVisible = false;
    this.skills = ["Waitress", "Model", "Brand Ambassador", "General Staff", "Event Manager", "Field Manager"];
    this.backupChanges();
  }

  public photoHandleEvent(data: any) {
    this.photoCount = data;
  }

  uploadResume(event) {
    var reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(event.target.files[0]);
    this.resumeFileName = event.target.files[0].name;
  }

  handleReaderLoaded(event) {
    this.elementRef.nativeElement.querySelector("#upload_resume").value = "";
  }

  deleteSkill(i) {
    this.skills.splice(i, 1);
  }

  propertyChanged(property) {
    if(property.value != property.backup) {
      if(!property.changed) {
        property.changed = true;
        this.changesCount++;
      }
    } else {
      property.changed =false;
      this.changesCount--;
    }
  }

  cancelPropertyChange(property) {
    property.value = property.backup;
    property.changed = false;
  }

  backupProperty(property) {
    property.backup = property.value;
    property.changed = false;
  }

  cancelChanges() {
    this.cancelPropertyChange(this.firstName);
    this.cancelPropertyChange(this.lastName);
    this.cancelPropertyChange(this.gender);
    this.cancelPropertyChange(this.birthday);
    this.cancelPropertyChange(this.headline);
    this.cancelPropertyChange(this.description);
    this.changesCount = 0;
  }

  backupChanges() {
    this.backupProperty(this.firstName);
    this.backupProperty(this.lastName);
    this.backupProperty(this.gender);
    this.backupProperty(this.birthday);
    this.backupProperty(this.headline);
    this.backupProperty(this.description);
    this.changesCount = 0;
  }

}
