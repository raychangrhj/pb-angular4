import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorAgreementDialogComponent } from './contractor-agreement-dialog.component';

describe('ContractorAgreementDialogComponent', () => {
  let component: ContractorAgreementDialogComponent;
  let fixture: ComponentFixture<ContractorAgreementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorAgreementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorAgreementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
