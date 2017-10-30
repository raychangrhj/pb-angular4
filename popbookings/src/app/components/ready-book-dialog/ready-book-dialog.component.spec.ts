import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyBookDialogComponent } from './ready-book-dialog.component';

describe('ReadyBookDialogComponent', () => {
  let component: ReadyBookDialogComponent;
  let fixture: ComponentFixture<ReadyBookDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyBookDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyBookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
