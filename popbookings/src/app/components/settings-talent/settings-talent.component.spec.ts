import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTalentComponent } from './settings-talent.component';

describe('SettingsTalentComponent', () => {
  let component: SettingsTalentComponent;
  let fixture: ComponentFixture<SettingsTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
