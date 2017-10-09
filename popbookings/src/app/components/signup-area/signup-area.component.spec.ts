import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAreaComponent } from './signup-area.component';

describe('SignupAreaComponent', () => {
  let component: SignupAreaComponent;
  let fixture: ComponentFixture<SignupAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
