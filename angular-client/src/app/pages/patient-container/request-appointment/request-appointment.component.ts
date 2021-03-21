import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.scss']
})
export class RequestAppointmentComponent implements OnInit, OnDestroy {

  public requestApptForm: FormGroup;
  public currentDate: Date;
  private subSink: SubSink;

  constructor(private formBuilder: FormBuilder) {
    this.subSink = new SubSink();
    this.currentDate = new Date();
  }

  public ngOnInit(): void {
    this.createRequestApptForm();
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
  }
}
