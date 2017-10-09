import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-signup-area',
  templateUrl: './signup-area.component.html',
  styleUrls: ['./signup-area.component.css']
})
export class SignupAreaComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  myLocation: string;
  searchControl: FormControl;

  @ViewChild("search") searchElementRef: ElementRef;

  constructor(
    private router: Router,
    private location: Location,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.latitude = 39.1;
    this.longitude = -94.6;
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
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 18;
        });
      })
    });
  }

  setCurrentPosition() {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;
      });
    }
  }

  searchLocation() {
    this.myLocation = this.myLocation.trim();
  }

}
