// npm install angular-persistence --save
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonService } from 'app/services/common.service';
import { PersistenceService, StorageType } from 'angular-persistence';
import { CryptoService } from 'app/services/crypto.service';
import { AppSettings } from 'app/classes/app-settings';

@Injectable()
export class AccountService {

  constructor(
    private http: Http,
    private commonService: CommonService,
    private persistenceService: PersistenceService,
    public cryptoService: CryptoService
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

  get token() {
    return this.persistenceService.get("token", StorageType.LOCAL);
  }

  set token(token) {
    this.persistenceService.remove("token");
    this.persistenceService.set("token", token, { type: StorageType.LOCAL, timeout: 3600000 });
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

  saveTalentPicture(image, number) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/SaveTalentPicture";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    var formData = new FormData();
    var blob = this.commonService.dataUriToBlob(image);
    var fileName = number + "_" + (number == 1 ? 1 : 0) + "_profile.jpg";
    formData.append("file", blob, fileName);
    return this.http.post(apiUrl, formData, { headers: headers }).map(res => res.json());
  }

  updateTalentLocation(location) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/UpdateTalentLocation";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    var body = {
      Address: this.cryptoService.encrypt(location.address),
      City: this.cryptoService.encrypt(location.city),
      State: this.cryptoService.encrypt(location.state),
      Country: this.cryptoService.encrypt(location.country),
      PostalCode: this.cryptoService.encrypt(location.postalcode),
      Latitude: location.latitude,
      Longitude: location.longitude
    };
    return this.http.post(apiUrl, body, { headers: headers }).map(res => res.json());
  }

  getIdentityTokenLayer(nonce) {
    var apiUrl = AppSettings.API_ENDPOINT + "/Account/IdentityToken";
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    var search = new URLSearchParams();
    search.append("nonce", nonce);
    return this.http.get(apiUrl, { headers: headers, search: search }).map(res => res.json());
  }

}
