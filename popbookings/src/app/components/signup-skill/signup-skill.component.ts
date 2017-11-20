import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from 'app/services/account.service';

@Component({
  selector: 'app-signup-skill',
  templateUrl: './signup-skill.component.html',
  styleUrls: ['./signup-skill.component.css'],
  host: {
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class SignupSkillComponent implements OnInit {
  allSkills: any[];
  filteredSkills: any[];
  selectedSkills: any[];
  searchSkill: string;
  notMatched: boolean;
  working: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private location: Location,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.allSkills = [];
    this.accountService.getSkills().subscribe(res => {
      res.skills.forEach(skill => {
        this.allSkills.push({
          id: skill.skillId,
          description: this.accountService.cryptoService.decrypt(skill.skillDescription)
        });
      });
    });
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

  filterSkill(event) {
    this.filteredSkills = this.allSkills.filter(skill => skill.description.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0);
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
      if(this.selectedSkills[i].id === skill.id) return i;
    }
    return -1;
  }

  submit() {
    var skills = [];
    this.selectedSkills.forEach(skill => {
      skills.push(skill.id);
    });
    this.working = true;
    this.accountService.addSkills(skills).subscribe(res => {
      if(res.success) {
        this.router.navigateByUrl("signup-rate");
      }
      this.working = false;
    });
  }

}
