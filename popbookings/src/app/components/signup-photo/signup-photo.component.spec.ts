import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhotoComponent } from './signup-photo.component';

describe('SignupPhotoComponent', () => {
  let component: SignupPhotoComponent;
  let fixture: ComponentFixture<SignupPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
