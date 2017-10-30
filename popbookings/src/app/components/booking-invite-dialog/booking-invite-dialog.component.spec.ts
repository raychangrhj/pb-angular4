import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInviteDialogComponent } from './booking-invite-dialog.component';

describe('BookingInviteDialogComponent', () => {
  let component: BookingInviteDialogComponent;
  let fixture: ComponentFixture<BookingInviteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingInviteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingInviteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
