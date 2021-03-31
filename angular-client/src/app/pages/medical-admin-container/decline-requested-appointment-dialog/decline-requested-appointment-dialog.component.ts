import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Role} from '../../../models/enums/role.enum';
import {MatTableDataSource} from '@angular/material/table';
import {PatientService} from '../../../services/patient/patient.service';
import {SubSink} from 'subsink';
import {Appointment} from '../../../models/appointment.model';
import { MatDialog } from '@angular/material/dialog';
import { ModifyAppointmentDetailsComponent } from '../modify-appointment-details/modify-appointment-details.component';
import {AppointmentService} from '../../../services/appointment/appointment.service';

@Component({
  selector: 'app-decline-requested-appointment-dialog',
  templateUrl: './decline-requested-appointment-dialog.component.html',
  styleUrls: ['./decline-requested-appointment-dialog.component.scss']
})
export class DeclineRequestedAppointmentDialogComponent implements OnInit,OnDestroy {

  public role = Role.MEDICAL_ADMIN;
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  note = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  save() {
    console.log(this.note.value);
    // Put the api request to decline appointment here
  }

}
