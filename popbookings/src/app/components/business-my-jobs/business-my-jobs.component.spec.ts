import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMyJobsComponent } from './business-my-jobs.component';

describe('BusinessMyJobsComponent', () => {
  let component: BusinessMyJobsComponent;
  let fixture: ComponentFixture<BusinessMyJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessMyJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessMyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
