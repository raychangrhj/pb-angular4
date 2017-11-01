import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPaymentsComponent } from './business-payments.component';

describe('BusinessPaymentsComponent', () => {
  let component: BusinessPaymentsComponent;
  let fixture: ComponentFixture<BusinessPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
