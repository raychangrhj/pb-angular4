import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css']
})
export class JobBoardComponent implements OnInit {
  pageHeaderVisible: boolean;
  filterContainerVisible: boolean;
  filterCityList: any[];
  filterRadiusList: number[];
  filterOtherList: string[];
  filterCity: string;
  filterRadius: number;
  filterOther: string;
  searchString: string;
  sortFieldList: any[];
  sortField: string;
  jobList: any[];

  latitude: number;
  longitude: number;
  zoom: number;
  markers: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.pageHeaderVisible = this.activatedRoute.snapshot.params.pageHeaderVisible;
    if(!this.pageHeaderVisible) this.pageHeaderVisible = false;
    this.filterContainerVisible = false;
    this.filterCityList = [
      { key: "", value: "All"},
      { key: "Atlanta", value: "Atlanta" },
      { key: "Blue Springs, MO", value: "Blue Springs, MO"},
      { key: "Dallas", value: "Dallas"},
      { key: "Kansas City, MO", value: "Kansas City, MO"},
      { key: "Nashville", value: "Nashville"},
      { key: "San Antonio", value: "San Antonio"}
    ];
    this.filterRadiusList = [2000, 500, 100];
    this.filterOtherList = ["A", "B", "C"];
    this.sortFieldList = [
      { key: "date", value: "DATE" },
      { key: "city", value: "CITY"}
    ];
    this.sortField = this.sortFieldList[0].key;
    this.jobList = this.dataService.getJobBoardData();

    this.latitude = 39.1;
    this.longitude = -94.6;
    this.zoom = 10;
    this.markers = [
      {
        latitude: this.latitude + Math.random() / 5 - 0.1,
        longitude: this.longitude + Math.random() / 5 - 0.1,
        icon: this.markerIconUrl("invited")
      }, {
        latitude: this.latitude + Math.random() / 5 - 0.1,
        longitude: this.longitude + Math.random() / 5 - 0.1,
        icon: this.markerIconUrl("invited")
      }, {
        latitude: this.latitude + Math.random() / 5 - 0.1,
        longitude: this.longitude + Math.random() / 5 - 0.1,
        icon: this.markerIconUrl("apply")
      }, {
        latitude: this.latitude + Math.random() / 5 - 0.1,
        longitude: this.longitude + Math.random() / 5 - 0.1,
        icon: this.markerIconUrl("apply")
      }, {
        latitude: this.latitude + Math.random() / 5 - 0.1,
        longitude: this.longitude + Math.random() / 5 - 0.1,
        icon: this.markerIconUrl("pending")
      }, {
        latitude: this.latitude + Math.random() / 5 - 0.1,
        longitude: this.longitude + Math.random() / 5 - 0.1,
        icon: this.markerIconUrl("pending")
      }
    ];
    
    this.reset();
  }

  reset() {
    this.filterCity = this.filterCityList[0].key;
    this.filterRadius = this.filterRadiusList[0];
    this.filterOther = this.filterOtherList[0];
    this.searchString = "";
    this.update();
  }

  update() {
    this.jobList = this.dataService.getJobBoardData().filter(job => 
      this.commonService.contains(job.location, this.filterCity) &&
      this.commonService.contains(job.title, this.searchString)
    );
    this.filterContainerVisible = false;
  }

  search(event) {
    if(event.key == "Enter") this.update();
  }

  sort() {
    console.log(this.sortField);
  }

  gotoJobDetails(jobId) {
    this.router.navigate(["jobdetails", { source: "job-board", id: jobId }]);
  }

  markerIconUrl(iconType: string) {
    var iconUrl = "../../../assets/images/marker-icon-" + iconType + ".png";
    return iconUrl;
  }

}
