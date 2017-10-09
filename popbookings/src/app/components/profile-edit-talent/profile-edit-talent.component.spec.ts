import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditTalentComponent } from './profile-edit-talent.component';

describe('ProfileEditTalentComponent', () => {
  let component: ProfileEditTalentComponent;
  let fixture: ComponentFixture<ProfileEditTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
