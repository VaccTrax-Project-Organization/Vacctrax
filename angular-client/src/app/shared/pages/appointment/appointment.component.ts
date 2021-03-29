import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from '../../../models/enums/role.enum';
import {MatDialog} from '@angular/material/dialog';
import {ViewAppointmentDialogComponent} from '../view-appointment-dialog/view-appointment-dialog.component';
import {SubSink} from 'subsink';
import {GenericTwoOptionDialogComponent} from '../generic-two-option-dialog/generic-two-option-dialog.component';
import {GenericTwoOptionDialogData} from '../../../models/generic-two-option-dialog-data';
import {Appointment} from '../../../models/appointment.model';
import {ViewAppointmentDialogInterface} from '../../../models/interfaces/view-appointment-dialog.interface';
import {UpdateAppointmentVaccineDetailsDialogComponent} from '../update-appointment-vaccine-details-dialog/update-appointment-vaccine-details-dialog.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})

export class AppointmentComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) public sort: MatSort;
  @Input() public roleInput: Role;
  @Input()
  set tableDataSource(data: MatTableDataSource<Appointment>) {
    this.dataSource = data;
  }

  public role: Role;
  public showActionDelete: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  constructor(public dialog: MatDialog) {
    this.subSink = new SubSink();
    this.displayedColumns = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine', 'comments', 'actions'];
    this.dataSource = new MatTableDataSource<Appointment>();
  }

  ngOnInit() {
    this.showActionDelete = this.roleInput === Role.PATIENT || this.roleInput === Role.MEDICAL_ADMIN;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
  openEditAppointmentVaccineDetails(element : Appointment){
      const dialogRef = this.dialog.open(UpdateAppointmentVaccineDetailsDialogComponent, {
        panelClass: 'dialog-panel-class',
        width: '650px',
        height: 'auto',
        disableClose: true,
        autoFocus: false,
        restoreFocus:false,
        data: element
      });

      this.subSink.add(dialogRef.afterClosed().subscribe(res => {
        console.log(res);
      }));
  }
  openViewAppointmentDialog(element: Appointment) {
    console.log(element);
    this.dialog.open(ViewAppointmentDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: true,
      autoFocus: false,
      data: element,
    });
  }

  public openCancelVaccinationDialog(): void {
    const dialogTitle = 'CANCEL APPOINTMENT';
    const dialogDescription = 'Are you sure you would like to cancel the selected appointment (enter appoint number here or something), this action cannot be undone';
    const dialogRef = this.dialog.open(GenericTwoOptionDialogComponent, {
      panelClass: 'dialog-panel-class',
      width: '650px',
      height: '350px',
      disableClose: true,
      autoFocus: false,
      data: new GenericTwoOptionDialogData(dialogTitle, dialogDescription)
    });

    // get call back data on close
    this.subSink.add(dialogRef.afterClosed().subscribe(res => {
      console.log('after close callback', res);
    }));
  }
}
