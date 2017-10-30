import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  DateAdapter,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdDatepickerModule,
  MdDialogModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdTabsModule,
  MD_DATE_FORMATS,
  NativeDateAdapter
} from '@angular/material';
import { NgxCarouselModule } from 'ngx-carousel';
import { AgmCoreModule } from '@agm/core'
import {} from '@types/googlemaps';
import * as moment from 'moment';

import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupMobileComponent } from './components/signup-mobile/signup-mobile.component';
import { SignupGenderBirthdayComponent } from './components/signup-gender-birthday/signup-gender-birthday.component';
import { SignupSkillComponent } from './components/signup-skill/signup-skill.component';
import { SignupRateComponent } from './components/signup-rate/signup-rate.component';
import { SignupPhotoComponent } from './components/signup-photo/signup-photo.component';
import { SignupAreaComponent } from './components/signup-area/signup-area.component';
import { SlickComponent } from './components/slick/slick.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingCalendarComponent } from './components/booking-calendar/booking-calendar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProfileTalentComponent } from './components/profile-talent/profile-talent.component';
import { ProfileEditTalentComponent } from './components/profile-edit-talent/profile-edit-talent.component';
import { ProfileAgencyComponent } from './components/profile-agency/profile-agency.component';
import { ProfileBusinessComponent } from './components/profile-business/profile-business.component';
import { SettingsTalentComponent } from './components/settings-talent/settings-talent.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AgencyConnectionDialogComponent } from './components/agency-connection-dialog/agency-connection-dialog.component';
import { ShiftSelectionDialogComponent } from './components/shift-selection-dialog/shift-selection-dialog.component';
import { AccountComponent } from './components/account/account.component';
import { ContractorAgreementDialogComponent } from './components/contractor-agreement-dialog/contractor-agreement-dialog.component';
import { BookingInviteDialogComponent } from './components/booking-invite-dialog/booking-invite-dialog.component';
import { ApplyWorkDialogComponent } from './components/apply-work-dialog/apply-work-dialog.component';
import { AlertBarComponent } from './components/alert-bar/alert-bar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ReadyBookDialogComponent } from './components/ready-book-dialog/ready-book-dialog.component';

var routes = [
  { path: "", component: WelcomeComponent, data: { title: "PopBookings" } },
  { path: "signin", component: SigninComponent, data: { title: "SignIn" } },
  { path: "signup", component: SignupComponent, data: { title: "SignUp", view: "" } },
  { path: "signup-mobile", component: SignupMobileComponent, data: { title: "Verify Mobile" } },
  { path: "signup-gender-birthday", component: SignupGenderBirthdayComponent, data: { title: "Gender & Birthday" } },
  { path: "signup-skill", component: SignupSkillComponent, data: { title: "Skills" } },
  { path: "signup-rate", component: SignupRateComponent, data: { title: "Hourly Rate" } },
  { path: "signup-photo", component: SignupPhotoComponent, data: { title: "Photos" } },
  { path: "signup-area", component: SignupAreaComponent, data: { title: "Location" } },
  { path: "jobboard", component: JobBoardComponent, data: { title: "JobBoard" } },
  { path: "bookings", component: BookingsComponent, data: { title: "Bookings" } },
  { path: "messages", component: MessagesComponent, data: { title: "Messages" } },
  { path: "payments", component: PaymentsComponent, data: { title: "Payments" } },
  { path: "profile-talent", component: ProfileTalentComponent, data: { title: "Talent Profile" } },
  { path: "profile-edit-talent", component: ProfileEditTalentComponent, data: { title: "Profile Edit" } },
  { path: "profile-agency", component: ProfileAgencyComponent, data: { title: "Agency Profile" } },
  { path: "profile-business", component: ProfileBusinessComponent, data: { title: "Business Profile" } },
  { path: "settings-talent", component: SettingsTalentComponent, data: { title: "Settings" } },
  { path: "jobdetails", component: JobDetailsComponent, data: { title: "Job Details" } },
  { path: "Account/ConfirmAccount/:token", component: AccountComponent, data:{ title: "Confirm Account" } },
  { path: "Account/SetPhoneNumber/:phoneNumber", component: AccountComponent, data: { title: "Set Phone Number" } }
];

export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if(displayFormat == "input") {
      return moment(date).format("ddd, MMMM D,YYYY");
    } else {
      return date.toDateString();
    }
  }
}

const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: { month: "short", year: "numeric", day: "numeric" }
  },
  display: {
    dateInput: "input",
    monthYearLabel: { year: "numeric", month: "short" },
    dateAllyLabel: { year: "numeric", month: "long", day: "numeric" },
    monthYearAllyLabel: { year: "numeric", month: "long" }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    SigninComponent,
    SignupComponent,
    SignupMobileComponent,
    SignupGenderBirthdayComponent,
    SignupSkillComponent,
    SignupRateComponent,
    SignupPhotoComponent,
    SignupAreaComponent,
    SlickComponent,
    JobBoardComponent,
    BookingsComponent,
    BookingCalendarComponent,
    MessagesComponent,
    PaymentsComponent,
    ProfileTalentComponent,
    ProfileEditTalentComponent,
    ProfileAgencyComponent,
    ProfileBusinessComponent,
    SettingsTalentComponent,
    JobDetailsComponent,
    AgencyConnectionDialogComponent,
    ShiftSelectionDialogComponent,
    AccountComponent,
    ContractorAgreementDialogComponent,
    BookingInviteDialogComponent,
    ApplyWorkDialogComponent,
    AlertBarComponent,
    ConfirmDialogComponent,
    ReadyBookDialogComponent
  ],
  entryComponents: [
    AgencyConnectionDialogComponent,
    ShiftSelectionDialogComponent,
    ContractorAgreementDialogComponent,
    BookingInviteDialogComponent,
    ApplyWorkDialogComponent,
    ConfirmDialogComponent,
    ReadyBookDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdDatepickerModule,
    MdDialogModule,
    MdFormFieldModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdNativeDateModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdTabsModule,
    NgxCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCj8Rk68KdRWzl7yZBqTmmr6sZhuifZHtI",
      libraries: ["places"]
    })
  ],
  providers: [
    CommonService,
    DataService,
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MD_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
