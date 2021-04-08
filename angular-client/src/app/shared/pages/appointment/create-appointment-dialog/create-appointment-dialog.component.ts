import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
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
import {PatientService} from '../../../../services/patient/patient.service';
import {PatientList} from '../../../Models/patientList';
import {BookAppointmentDTO} from '../../../Models/bookAppointmentDTO';
import {SubSink} from 'subsink';
import { Role } from 'src/app/models/enums/role.enum';

// tslint:disable: max-line-length
@Component({
  selector: 'app-create-appointment-dialog',
  templateUrl: './create-appointment-dialog.component.html',
  styleUrls: ['./create-appointment-dialog.component.scss']
})
export class CreateAppointmentDialogComponent implements OnInit, OnDestroy {
  public modifyApptForm: FormGroup;
  public currentDate: Date;
  public vaccines$: Observable<Vaccine[]>;
  public patients$: Observable<PatientList[]>;
  public healthPractitioners$: Observable<HealthPractitioner[]>;
  public modularLabels;
  public isPatient: boolean;
  private subSink: SubSink;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateAppointmentDialogModel,
              private dialogRef: MatDialogRef<ModifyAppointmentDetailsDialogComponent>,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService,
              private healthPractitionerService: HealthPractitionerService,
              private patientService: PatientService,
              private appointmentService: AppointmentService) {
    if (data) {
      this.isPatient = data.role === Role.PATIENT;

      if (this.isPatient) {
        this.modularLabels = {
          title: 'Request Appointment',
          appointmentDate: 'Preferred Date',
          appointmentTime: 'Preferred Time',
        }
      } else {
        this.modularLabels = {
          title: 'Create Appointment',
          appointmentDate: 'Appointment Date',
          appointmentTime: 'Appointment Time',
        }
      }
    }
    this.subSink = new SubSink();
  }

  ngOnInit() {
    this.createModifyApptForm();
    this.currentDate = new Date();
    this.vaccines$ = this.vaccineService.getVaccines();
    this.patients$ = this.patientService.getAllPatients();

    const tempClinicId = '6060e1549107f28980861695';
    this.healthPractitioners$ = this.healthPractitionerService.getHealthPractitionersByClinicId(tempClinicId);
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  private createModifyApptForm(): void {
    this.modifyApptForm = this.formBuilder.group({
      patient: ['', Validators.required],
      clinic: ['', Validators.required],
      vaccine: ['', Validators.required],
      vaccineDose: ['', Validators.required],
      healthPractitioner: ['', Validators.required],
      appointmentDate: [new Date(Date.now()) || '', Validators.required],
      appointmentTime: [new Date(Date.now()).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
      reason: ['', Validators.required],
    });

    // disable validation for hidden fields
    if(this.isPatient){
      this.modifyApptForm.get('patient').clearValidators();
      this.modifyApptForm.get('healthPractitioner').clearValidators();
    } else {
      this.modifyApptForm.get('clinic').clearValidators();
    }
  }

  public submitUpdatedAppointment(): void {
    console.log('submit reached');

    if (this.modifyApptForm.valid) {
      const {vaccine, vaccineDose, healthPractitioner, appointmentDate, appointmentTime, patient, reason } = this.modifyApptForm.getRawValue();
      const startTime = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);

      // TODO replace the hardcoded clinic Id with the clinic Id of Medical Admin Signed In when Sign in is implemented
      const bookAppointmentPayload = {...new BookAppointmentDTO(), vaccineDose, startTime, vaccineId: vaccine, healthPractitionerId: healthPractitioner, patientId: patient, clinicId: '6060e1549107f28980861695', reason};

      console.log(bookAppointmentPayload);

      this.subSink.add(this.appointmentService.bookAppointment(bookAppointmentPayload).subscribe(result => {
        console.log(result);
        this.dialogRef.close(true);
      }, err => {
        console.log(err);
        this.dialogRef.close(true);
      }));
    }
  }
}

export interface CreateAppointmentDialogModel{
  role: Role;
}
