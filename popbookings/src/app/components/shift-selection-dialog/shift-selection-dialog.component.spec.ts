import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftSelectionDialogComponent } from './shift-selection-dialog.component';

describe('ShiftSelectionDialogComponent', () => {
  let component: ShiftSelectionDialogComponent;
  let fixture: ComponentFixture<ShiftSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
