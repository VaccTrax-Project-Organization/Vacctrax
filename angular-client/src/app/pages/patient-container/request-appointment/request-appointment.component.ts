import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubSink} from 'subsink';
import {AppointmentRequest} from "../../../models/appointment-request.model";
import {ClinicService} from "../../../services/clinic/clinic.service";
import {Clinic} from "../../../models/clinic.model";

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

  constructor(private formBuilder: FormBuilder, private clinicService: ClinicService) {
    this.subSink = new SubSink();
    this.currentDate = new Date();
    this.clinics = [];
  }

  public ngOnInit(): void {
    this.createRequestApptForm();

    this.clinicService.getClinics().subscribe(res => {
      this.clinics = res;
    })
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  // create the request form fields to bind to from the .html
  private createRequestApptForm(): void {
    this.requestApptForm = this.formBuilder.group({
      clinic: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      vaccineType: ['', Validators.required],
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

    const test: { reason, preferredDate, startTime } = this.requestApptForm.getRawValue();

   /* const appointmentRequest: AppointmentRequest = {
      clinicId: this.requestApptForm.getRawValue();
    }*/
  }
}
