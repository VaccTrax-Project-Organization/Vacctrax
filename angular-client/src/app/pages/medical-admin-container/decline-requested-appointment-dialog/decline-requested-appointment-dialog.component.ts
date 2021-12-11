import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Role} from '../../../models/enums/role.enum';
import {MatTableDataSource} from '@angular/material/table';
import {PatientService} from '../../../services/patient/patient.service';
import {SubSink} from 'subsink';
import {Appointment} from '../../../models/appointment.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifyAppointmentDetailsComponent } from '../modify-appointment-details/modify-appointment-details.component';
import {AppointmentService} from '../../../services/appointment/appointment.service';
import { AppointmentType } from 'src/app/models/enums/appointment.enum';

@Component({
  selector: 'app-decline-requested-appointment-dialog',
  templateUrl: './decline-requested-appointment-dialog.component.html',
  styleUrls: ['./decline-requested-appointment-dialog.component.scss']
})
export class DeclineRequestedAppointmentDialogComponent implements OnInit,OnDestroy {

  public role = Role.MEDICAL_ADMIN;
  // public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  note = new FormControl();

  constructor(private appointmentService: AppointmentService, private dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) private appointment: Appointment) {
    this.subSink = new SubSink();
    // this.dataSource = new MatTableDataSource<Appointment>();

    // this.subSink.add(appointmentService.getConfirmedAppointmentsByClinicId().subscribe(res => {
    //   console.log(res);
    //   this.dataSource = new MatTableDataSource<Appointment>(res);
    // },error => {
    //   console.log(error);
    // }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  save($event) {
    const apiPayload = {_id: this.appointment._id, type: AppointmentType.CANCELLED}
    this.subSink.add(this.appointmentService.updateAppointment(apiPayload).subscribe(res=>{console.log(res)}));
    console.log(this.note.value);
  }
}
