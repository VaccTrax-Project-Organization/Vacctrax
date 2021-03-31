import {Component, OnDestroy, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';
import {MatTableDataSource} from '@angular/material/table';
import {PatientService} from '../../../services/patient/patient.service';
import {SubSink} from 'subsink';
import {Appointment} from '../../../models/appointment.model';
import { MatDialog } from '@angular/material/dialog';
import { ModifyAppointmentDetailsComponent } from '../modify-appointment-details/modify-appointment-details.component';
import {DeclineRequestedAppointmentDialogComponent} from '../decline-requested-appointment-dialog/decline-requested-appointment-dialog.component';
import {AppointmentService} from '../../../services/appointment/appointment.service';
import { ModifyAppointmentDetailsComponent } from '../modify-appointment-details/modify-appointment-details.component';

@Component({
  selector: 'app-medical-admin-dashboard',
  templateUrl: './medical-admin-dashboard.component.html',
  styleUrls: ['./medical-admin-dashboard.component.scss']
})
export class MedicalAdminDashboardComponent implements OnInit,OnDestroy {
  public role = Role.MEDICAL_ADMIN;
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  constructor(private appointmentService: AppointmentService, private dialog: MatDialog) {
    this.subSink = new SubSink();
    this.dataSource = new MatTableDataSource<Appointment>();

    this.subSink.add(appointmentService.getConfirmedAppointmentsByClinicId().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Appointment>(res);
    },error => {
      console.log(error);
    }));
  }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  public openModifyAppointmentDialog(): void {
    const dialogRef = this.dialog.open(ModifyAppointmentDetailsComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: false,
      autoFocus: false,
      height: '620px'
    });
  }

  public openDeclineAppointmentRequestDialog(): void {
    const dialogRef = this.dialog.open(DeclineRequestedAppointmentDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: false,
      autoFocus: false,
      height: '400px',
      width: '650px'
    });
  }

}
