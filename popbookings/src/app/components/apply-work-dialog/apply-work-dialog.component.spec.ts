import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyWorkDialogComponent } from './apply-work-dialog.component';

describe('ApplyWorkDialogComponent', () => {
  let component: ApplyWorkDialogComponent;
  let fixture: ComponentFixture<ApplyWorkDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyWorkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyWorkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
