import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationDetailsDialogComponent } from './conversation-details-dialog.component';

describe('ConversationDetailsDialogComponent', () => {
  let component: ConversationDetailsDialogComponent;
  let fixture: ComponentFixture<ConversationDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
