import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSkillComponent } from './signup-skill.component';

describe('SignupSkillComponent', () => {
  let component: SignupSkillComponent;
  let fixture: ComponentFixture<SignupSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
