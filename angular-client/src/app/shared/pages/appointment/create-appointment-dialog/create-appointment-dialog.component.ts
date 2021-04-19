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
import { ClinicService } from 'src/app/services/clinic/clinic.service';
import { Clinic } from 'src/app/models/clinic.model';
import * as moment from 'moment';
import { AppointmentType } from 'src/app/models/enums/appointment.enum';

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
  public clinics: Clinic[];
  public healthPractitioners$: Observable<HealthPractitioner[]>;
  public modularLabels;
  public isPatient: boolean;
  private subSink: SubSink;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateAppointmentDialogModel,
              private dialogRef: MatDialogRef<ModifyAppointmentDetailsDialogComponent>,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService,
              private clinicService: ClinicService,
              private healthPractitionerService: HealthPractitionerService,
              private patientService: PatientService,
              private appointmentService: AppointmentService) {
    this.clinics = [];
    if (data) {
      this.isPatient = data.role === Role.PATIENT;

      if (this.isPatient) {
        let title = '';

        if (this.data.appointment){
          title = 'Request Change Appointment';
        } else {
          title = 'Request Appointment';
        }

        this.modularLabels = {
          title,
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
    this.subSink.add(this.clinicService.getClinics().subscribe(res => {
      this.clinics = res;
    }));

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

  public createModifyApptForm(): void {
    if (this.data?.appointment) {
      const appointment = this.data.appointment;
      console.log(appointment);
      this.modifyApptForm = this.formBuilder.group({
        patient: [appointment.patient._id, Validators.required],
        clinic: [appointment.clinic._id, Validators.required],
        vaccine: [appointment.vaccine._id, Validators.required],
        vaccineDose: [appointment.vaccineDose, Validators.required],
        healthPractitioner: [appointment.healthPractitioner, Validators.required],
        appointmentDate: [new Date(appointment.preferredDate) || '', Validators.required],
        appointmentTime: [new Date(appointment.preferredTime).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
        reason: [appointment.reason, Validators.required],
      });
    } else {
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
    }

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
      let appointmentPayload;
      const {clinic, vaccine, vaccineDose, healthPractitioner, appointmentDate, appointmentTime, patient, reason } = this.modifyApptForm.getRawValue();
      console.log('appointment details', this.modifyApptForm.value);
      if (this.isPatient){
        const preferredDate = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);
        // appointmentPayload = {...new BookAppointmentDTO(), vaccineDose, preferredDate, preferredTime: appointmentTime, vaccineId: vaccine, healthPractitionerId: healthPractitioner, patientId: patient, clinicId: clinic, reason, _id: this.data.appointment._id};
        // let preferredTime= new Date(preferredDate).setTime(appointmentTime);

        let preferredTime = moment(appointmentTime, ['h:mm A']).format();

        appointmentPayload = {
          _id: this.data.appointment._id,
          preferredDate: appointmentDate,
          preferredTime,
          reason,
          vaccineDose,
          vaccine,
          type: AppointmentType.REQUESTED
        };


        this.subSink.add(this.appointmentService.updateAppointment(appointmentPayload).subscribe(result => {
          console.log(result);
          this.dialogRef.close(true);
        }, err => {
          console.log(err);
          this.dialogRef.close(true);
        }));
      }
      else
      {
        const startTime = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);
        appointmentPayload = {...new BookAppointmentDTO(), vaccineDose, startTime, vaccineId: vaccine, healthPractitionerId: healthPractitioner, patientId: patient, clinicId: '6060e1549107f28980861695', reason};

        console.log(appointmentPayload);
        if (appointmentPayload){
          this.subSink.add(this.appointmentService.bookAppointment(appointmentPayload).subscribe(result => {
            console.log(result);
            this.dialogRef.close(true);
          }, err => {
            console.log(err);
            this.dialogRef.close(true);
          }));
        }
      }
    }
  }
}

export interface CreateAppointmentDialogModel{
  appointment?: Appointment;
  role: Role;
}
