import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMobileComponent } from './signup-mobile.component';

describe('SignupMobileComponent', () => {
  let component: SignupMobileComponent;
  let fixture: ComponentFixture<SignupMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
