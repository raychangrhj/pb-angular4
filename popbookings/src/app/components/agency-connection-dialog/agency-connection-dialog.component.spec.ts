import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyConnectionDialogComponent } from './agency-connection-dialog.component';

describe('AgencyConnectionDialogComponent', () => {
  let component: AgencyConnectionDialogComponent;
  let fixture: ComponentFixture<AgencyConnectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyConnectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyConnectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
