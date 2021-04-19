import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentType } from 'src/app/models/enums/appointment.enum';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit, OnDestroy {
  checkInForm: FormGroup;
  subSink: SubSink;
  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentService, 
     @Inject(MAT_DIALOG_DATA) private appointment: Appointment,) {
       this.subSink = new SubSink();
      }
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  ngOnInit(): void {
    this.checkInForm = this.createCheckInForm();
  }

  createCheckInForm(): FormGroup{
    return this.formBuilder.group({
      age: [''],
      frontline: [false],
      pregnant: [false],
      hospitalWorker:[false],
      indigenous:[false],
      longTermCare:[false],
    })
  }

  checkInPatient($event) {
    const apiPayload = {_id: this.appointment._id, type: AppointmentType.CONFIRMED}
    this.subSink.add(this.appointmentService.updateAppointment(apiPayload).subscribe(res=>{console.log(res)}));
  }
}
