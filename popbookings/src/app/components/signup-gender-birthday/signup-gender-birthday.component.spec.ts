import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGenderBirthdayComponent } from './signup-gender-birthday.component';

describe('SignupGenderBirthdayComponent', () => {
  let component: SignupGenderBirthdayComponent;
  let fixture: ComponentFixture<SignupGenderBirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupGenderBirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGenderBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
