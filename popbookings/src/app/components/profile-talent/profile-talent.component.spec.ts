import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTalentComponent } from './profile-talent.component';

describe('ProfileTalentComponent', () => {
  let component: ProfileTalentComponent;
  let fixture: ComponentFixture<ProfileTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
