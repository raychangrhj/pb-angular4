// npm install angular-persistence --save
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { PersistenceService, StorageType } from 'angular-persistence';
import { CryptoService } from 'app/services/crypto.service';
import { AppSettings } from 'app/classes/app-settings';

@Injectable()
export class AccountService {

  constructor(
    private persistenceService: PersistenceService,
    public cryptoService: CryptoService,
    private http: Http
  ) { }

  registerTalent(user) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/Register";
    var body = {
      FirstName: this.cryptoService.encrypt(user.firstName.value),
      LastName: this.cryptoService.encrypt(user.lastName.value),
      EmailAddress: this.cryptoService.encrypt(user.email.value),
      Password: this.cryptoService.encrypt(user.password.value),
      GoogleId: "",
      FacebookId: "",
      UserType: 2
    };
    return this.http.post(apiUrl, body).map(res => res.json());
  }

  confirmAccount(token, hint) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/ConfirmToken";
    var body = {
      Token: token,
      Hint: hint
    };
    return this.http.post(apiUrl, body).map(res => res.json());
  }

  set token(token) {
    this.persistenceService.set("token", token, { type: StorageType.SESSION });
  }

  get token() {
    return this.persistenceService.get("token", StorageType.SESSION);
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append("Authorization", "Bearer " + this.token);
  }

  getMobileCodes() {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/MobileCodes";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(apiUrl, { headers: headers }).map(res => res.json());
  }

  confirmMobile(phoneNumber) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/ConfirmMobile";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    var body = {
      Mobile: this.cryptoService.encrypt(phoneNumber)
    };
    return this.http.post(apiUrl, body, { headers: headers }).map(res => res.json());
  }

  updateTalentGenderAndBirthday(gender, birthday) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/UpdateTalentGenderAndBirthday";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    var body = {
      Gender: this.cryptoService.encrypt(gender),
      Birthday: birthday
    };
    return this.http.post(apiUrl, body, { headers: headers }).map(res => res.json());
  }

  getSkills() {
    var apiUrl = AppSettings.API_ENDPOINT + "/Skills";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(apiUrl, { headers: headers }).map(res => res.json());
  }

  addSkills(skills) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Skills/AddToTalent";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    var body = {
      Skills: skills
    };
    return this.http.post(apiUrl, body, { headers: headers }).map(res => res.json());
  }

  updateTalentRate(rate) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/UpdateTalentRate";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    var body = {
      Rate: rate
    };
    return this.http.post(apiUrl, body, { headers: headers }).map(res => res.json());
  }

}
