import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { AccountService } from 'app/services/account.service';

@Component({
  selector: 'app-signup-area',
  templateUrl: './signup-area.component.html',
  styleUrls: ['./signup-area.component.css']
})
export class SignupAreaComponent implements OnInit {
  locationInfo: any;
  zoom: number;
  searchControl: FormControl;
  working: boolean = false;

  @ViewChild("search") searchElementRef: ElementRef;

  constructor(
    private router: Router,
    private location: Location,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.locationInfo = {
      number: "",
      street: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: 0,
      latitude: 39.1,
      longitude: -94.6,
      valid: false
    };
    this.zoom = 18;
    this.searchControl = new FormControl();
    this.setCurrentPosition();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if(place.geometry === undefined || place.geometry === null) return;
          this.locationInfo = {
            number: "",
            street: "",
            address: "",
            city: "",
            state: "",
            country: "",
            postalCode: 0,
            latitude: 0,
            longitude: 0,
            valid: true
          }
          for(var i = 0; i < place.address_components.length; i++) {
            for(var j = 0; j < place.address_components[i].types.length; j++) {
              var type = place.address_components[i].types[j];
              var name = place.address_components[i].long_name;
              switch(type) {
                case "street_number":
                  this.locationInfo.number = name; break;
                case "route":
                  this.locationInfo.street = name; break;
                case "locality":
                  this.locationInfo.city = name; break;
                case "administrative_area_level_2":
                  this.locationInfo.state = name; break;
                case "administrative_area_level_1":
                  this.locationInfo.country = name; break;
                case "country":
                  this.locationInfo.country = name; break;
                case "postal_code":
                  this.locationInfo.postalCode = name; break;
              }
            }
          }
          this.locationInfo.address = this.locationInfo.number + (this.locationInfo.number ? " " : "") + this.locationInfo.street;
          this.locationInfo.latitude = place.geometry.location.lat();
          this.locationInfo.longitude = place.geometry.location.lng();
          this.zoom = 18;
        });
      });
    });
  }

  setCurrentPosition() {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locationInfo.latitude = position.coords.latitude;
        this.locationInfo.longitude = position.coords.longitude;
        this.zoom = 18;
      });
    }
  }

  searchLocation() {
  }

  submit() {
    this.working = true;
    this.accountService.updateTalentLocation(this.locationInfo).subscribe(res => {
      if(res.success) {
        this.router.navigate(["/jobboard", {pageHeaderVisible: true}]);
      }
      this.working = false;
    });
  }

}
