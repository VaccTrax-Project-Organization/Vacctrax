import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVaccineDetailsDialogComponent } from './view-vaccine-details-dialog.component';

describe('ViewVaccineDetailsDialogComponent', () => {
  let component: ViewVaccineDetailsDialogComponent;
  let fixture: ComponentFixture<ViewVaccineDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVaccineDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVaccineDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
