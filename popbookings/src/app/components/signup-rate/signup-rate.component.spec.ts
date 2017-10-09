import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRateComponent } from './signup-rate.component';

describe('SignupRateComponent', () => {
  let component: SignupRateComponent;
  let fixture: ComponentFixture<SignupRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
