import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup-skill',
  templateUrl: './signup-skill.component.html',
  styleUrls: ['./signup-skill.component.css'],
  host: {
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class SignupSkillComponent implements OnInit {
  allSkills: string[];
  filteredSkills: string[];
  selectedSkills: string[];
  searchSkill: string;
  notMatched: boolean;

  constructor(private router: Router, private location: Location, private elementRef: ElementRef) { }

  ngOnInit() {
    this.allSkills = ["Angular", "CSS", "CSS3", "JavaScript", "jQuery"];
    this.filteredSkills = [];
    this.selectedSkills = [];
    this.searchSkill = "";
    this.notMatched = false;
  }

  onDocumentClick(event) {
    var filterSkillPanel = this.elementRef.nativeElement.querySelector(".filter-skill-wrapper");
    if(!filterSkillPanel) return;
    if(!filterSkillPanel.contains(event.target)) this.filteredSkills = [];
  }

  filterSkills(event) {
    this.filteredSkills = this.allSkills.filter(skill => skill.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0);
    this.notMatched = this.filteredSkills.length === 0;
  }

  cancelSearch() {
    this.searchSkill = "";
    this.filteredSkills = [];
    this.notMatched = false;
  }

  addSkill(skill) {
    if(this.findSkill(skill) === -1) this.selectedSkills.push(skill);
    this.searchSkill = "";
    this.filteredSkills = [];
  }

  deleteSkill(skill) {
    var index = this.findSkill(skill);
    if(index === -1) return;
    this.selectedSkills.splice(index, 1);
  }

  findSkill(skill) {
    for(var i = 0; i < this.selectedSkills.length; i++) {
      if(this.selectedSkills[i] === skill) return i;
    }
    return -1;
  }

}
