import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { HealthPractitioner } from 'src/app/models/healthPractitioner.model';
import { Vaccine } from 'src/app/models/vaccine.model';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { HealthPractitionerService } from 'src/app/services/health-practitioner/health-practitioner.service';
import { VaccinesService } from 'src/app/services/vaccines/vaccines.service';
import { ModifyAppointmentDetailsDialogComponent } from '../modify-appointment-details-dialog/modify-appointment-details-dialog.component';

@Component({
  selector: 'app-create-appointment-dialog',
  templateUrl: './create-appointment-dialog.component.html',
  styleUrls: ['./create-appointment-dialog.component.scss']
})
export class CreateAppointmentDialogComponent implements OnInit {
  public modifyApptForm: FormGroup;
  public currentDate: Date;
  public vaccines$: Observable<Vaccine[]>;
  public healthPractitioners$: Observable<HealthPractitioner[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Appointment,
              private dialogRef: MatDialogRef<ModifyAppointmentDetailsDialogComponent>,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService,
              private healthPractitionerService: HealthPractitionerService) { }

  ngOnInit() {
    this.createModifyApptForm();
    this.currentDate = new Date();
    this.vaccines$ = this.vaccineService.getVaccines();

    const tempClinicId = '6060e1549107f28980861695';
    this.healthPractitioners$ = this.healthPractitionerService.getHealthPractitionersByClinicId(tempClinicId);
  }

  private createModifyApptForm(): void {
    this.modifyApptForm = this.formBuilder.group({
      patient: ['', Validators.required],
      vaccine: ['', Validators.required],
      vaccineDose: ['', Validators.required],
      healthPractitioner: ['', Validators.required],
      appointmentDate: [new Date(Date.now()) || '', Validators.required],
      appointmentTime: [new Date(Date.now()).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
      reason: ['', Validators.required],
    });
  }

  public submitUpdatedAppointment(): void {
    console.log('submit reached');

    if (this.modifyApptForm.valid) {
      const {vaccine, vaccineDose, healthPractitioner, appointmentDate, appointmentTime} = this.modifyApptForm.getRawValue();
      const startTime = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);

      const createdAppointment = {...this.data, vaccine, vaccineDose, healthPractitioner, startTime};

      // TODO: Integrate API

      this.dialogRef.close(true);
    }
  }
}
