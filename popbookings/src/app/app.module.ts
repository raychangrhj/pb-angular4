import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdDialogModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdTabsModule
} from '@angular/material';
import { NgxCarouselModule } from 'ngx-carousel';
import { AgmCoreModule } from '@agm/core'
import {} from '@types/googlemaps';

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
import { ShiftSelectionDialogComponent } from './components/shift-selection-dialog/shift-selection-dialog.component';

var routes = [
  {path: "", component: WelcomeComponent, data: {title: "PopBookings"}},
  {path: "signin", component: SigninComponent, data: {title: "SignIn"}},
  {path: "signup", component: SignupComponent, data: {title: "SignUp", view: ""}},
  {path: "signup-mobile", component: SignupMobileComponent, data: {title: "Verify Mobile"}},
  {path: "signup-gender-birthday", component: SignupGenderBirthdayComponent, data: {title: "Gender & Birthday"}},
  {path: "signup-skill", component: SignupSkillComponent, data: {title: "Skills"}},
  {path: "signup-rate", component: SignupRateComponent, data: {title: "Hourly Rate"}},
  {path: "signup-photo", component: SignupPhotoComponent, data: {title: "Photos"}},
  {path: "signup-area", component: SignupAreaComponent, data: {title: "Location"}},
  {path: "jobboard", component: JobBoardComponent, data: {title: "JobBoard"}},
  {path: "bookings", component: BookingsComponent, data: {title: "Bookings"}},
  {path: "messages", component: MessagesComponent, data: {title: "Messages"}},
  {path: "payments", component: PaymentsComponent, data: {title: "Payments"}},
  {path: "profile-talent", component: ProfileTalentComponent, data: {title: "Talent Profile"}},
  {path: "profile-edit-talent", component: ProfileEditTalentComponent, data: {title: "Profile Edit"}},
  {path: "profile-agency", component: ProfileAgencyComponent, data: {title: "Agency Profile"}},
  {path: "profile-business", component: ProfileBusinessComponent, data: {title: "Business Profile"}},
  {path: "settings-talent", component: SettingsTalentComponent, data: {title: "Settings"}},
  {path: "jobdetails", component: JobDetailsComponent, data: {title: "Job Details"}}
];

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
    ShiftSelectionDialogComponent
  ],
  entryComponents: [ShiftSelectionDialogComponent],
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
    MdDialogModule,
    MdFormFieldModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdTabsModule,
    NgxCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCj8Rk68KdRWzl7yZBqTmmr6sZhuifZHtI",
      libraries: ["places"]
    })
  ],
  providers: [CommonService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
