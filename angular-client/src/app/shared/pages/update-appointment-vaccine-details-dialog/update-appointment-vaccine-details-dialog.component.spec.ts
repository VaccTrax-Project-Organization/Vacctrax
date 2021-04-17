import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentVaccineDetailsDialogComponent } from './update-appointment-vaccine-details-dialog.component';

describe('DeclineRequestedAppointmentDialogComponent', () => {
  let component: UpdateAppointmentVaccineDetailsDialogComponent;
  let fixture: ComponentFixture<UpdateAppointmentVaccineDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentVaccineDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppointmentVaccineDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
