import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubSink} from 'subsink';
import {AppointmentRequest} from '../../../models/appointment-request.model';
import {ClinicService} from '../../../services/clinic/clinic.service';
import {Clinic} from '../../../models/clinic.model';
import {AppointmentType} from '../../../models/enums/appointment.enum';
import {Patient} from '../../../models/patient.model';
import {PatientService} from '../../../services/patient/patient.service';
import {AppointmentService} from '../../../services/appointment/appointment.service';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.scss']
})

export class RequestAppointmentComponent implements OnInit, OnDestroy {
  public requestApptForm: FormGroup;
  public currentDate: Date;
  private subSink: SubSink;
  public clinics: Clinic[];
  private patient: Patient;

  constructor(private formBuilder: FormBuilder,
              private clinicService: ClinicService,
              private patientService: PatientService,
              private appointmentService: AppointmentService) {
    this.subSink = new SubSink();
    this.currentDate = new Date();
    this.clinics = [];
  }

  public ngOnInit(): void {
    this.createRequestApptForm();

    this.subSink.add(this.clinicService.getClinics().subscribe(res => {
      this.clinics = res;
    }));

    // replace this later with NgRx Store or wherever the logged in patient is stored
    this.subSink.add(this.patientService.getPatient().subscribe(res => this.patient = res));
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  // create the request form fields to bind to from the .html
  private createRequestApptForm(): void {
    this.requestApptForm = this.formBuilder.group({
      clinicId: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      vaccineId: ['', Validators.required],
      vaccineDose: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }

  public submitRequestApptForm(): void {
    console.log('submitted!');
    if (this.requestApptForm.invalid) {
      console.log('form invalid!');
      return;
    }

    const { clinicId, preferredDate, preferredTime, vaccine, vaccineDose, reason } = this.requestApptForm.getRawValue();

    const appointmentRequest: AppointmentRequest = {
      patientId: this.patient._id,
      clinicId,
      preferredDate,
      preferredTime,
      type: AppointmentType.REQUESTED,
      reason,
      vaccineId: vaccine,
      vaccineDose
    }

    this.appointmentService.requestAppointment(appointmentRequest).subscribe(res => {
      console.log(res);
    });
  }
}
