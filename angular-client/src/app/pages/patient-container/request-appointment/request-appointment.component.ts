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
import {VaccinesService} from '../../../services/vaccines/vaccines.service';
import {Vaccine} from '../../../models/vaccine.model';
import * as moment from 'moment';
import { HealthPractitioner } from 'src/app/models/healthPractitioner.model';
import { NavigationExtras, Router } from '@angular/router';
import {getUserDetails} from '../../../shared/Functions/getUserDetails';

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
  public vaccines: Vaccine[];
  private patient: Patient;

  constructor(private formBuilder: FormBuilder,
              private clinicService: ClinicService,
              private patientService: PatientService,
              private appointmentService: AppointmentService,
              private vaccineService: VaccinesService,
              private router: Router) {
    this.subSink = new SubSink();
    this.currentDate = new Date();
    this.clinics = [];
  }

  public ngOnInit(): void {
    this.createRequestApptForm();

    this.subSink.add(this.clinicService.getClinics().subscribe(res => {
      this.clinics = res;
    }));

    this.subSink.add(this.vaccineService.getVaccines().subscribe(res => {
      this.vaccines = res;
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
      vaccine: ['', Validators.required],
      vaccineDose: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }
  /**
   * submitRequestApptForm will request appt form
   * */
  public submitRequestApptForm(): void {
    console.log('submitted!');
    if (this.requestApptForm.invalid) {
      console.log('form invalid!');
      return;
    }

    const { clinicId, preferredDate, preferredTime, vaccine, vaccineDose, reason } = this.requestApptForm.getRawValue();
    const keys = getUserDetails();
    const test = moment(preferredTime, ['h:mm A']).format();
    const appointmentRequest: AppointmentRequest = {
      patient: keys?.userId,
      // patient: '',
      clinic: clinicId,
      preferredDate,
      preferredTime: moment(preferredTime, ['h:mm A']).format(),
      startTime: null,
      endTime: null,
      type: AppointmentType.REQUESTED,
      reason,
      vaccine,
      vaccineDose,
      healthPractitioner: undefined,
    }

    this.subSink.add(this.appointmentService.requestAppointment(appointmentRequest).subscribe(res => {
      console.log(res);

      // this.router.navigateByUrl('/patient/dashboard', { state: { appointment: res } });
      const navigationExtras: NavigationExtras = {
        state: {
          appointment: res
        }
      };
      this.router.navigate(['/patient/dashboard'], navigationExtras);
    }));
  }
}
