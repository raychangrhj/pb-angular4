import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTalentSearchComponent } from './business-talent-search.component';

describe('BusinessTalentSearchComponent', () => {
  let component: BusinessTalentSearchComponent;
  let fixture: ComponentFixture<BusinessTalentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTalentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTalentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
