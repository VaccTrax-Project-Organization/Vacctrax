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
import {finalize} from 'rxjs/operators';
import {getUserDetails} from '../../../shared/Functions/getUserDetails';

@Component({
  selector: 'app-medical-admin-dashboard',
  templateUrl: './medical-admin-dashboard.component.html',
  styleUrls: ['./medical-admin-dashboard.component.scss']
})

export class MedicalAdminDashboardComponent implements OnInit,OnDestroy {
  public role;
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;
  showLoading = false;

  constructor(private appointmentService: AppointmentService, private dialog: MatDialog) {

    this.role = getUserDetails()?.type;
    if (!this.role)
      this.role = Role.MEDICAL_ADMIN;

    this.subSink = new SubSink();
    this.dataSource = new MatTableDataSource<Appointment>();

    this.getTableData();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  getTableData(){
    this.showLoading = true;

    this.subSink.add(this.appointmentService.getAppointmentsByClinic().pipe(
      finalize(() => this.showLoading = false),
    ).subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Appointment>(res);
    },error => {
      console.log(error);
    }));

    this.subSink.add(this.appointmentService.getAppointmentsByClinic().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Appointment>(res);
      this.showLoading = false;
    },error => {
      console.log(error);
      this.showLoading = false;
    }));
  }
  /**
   * openModifyAppointmentDialog will open dialog for modify appt
   * */
  public openModifyAppointmentDialog(): void {
    const dialogRef = this.dialog.open(ModifyAppointmentDetailsComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: false,
      autoFocus: false,
      height: '620px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res){
        this.getTableData();
      }
    });
  }
  /**
   * openDeclineAppointmentRequestDialog will open the decline appt component
   * */
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
