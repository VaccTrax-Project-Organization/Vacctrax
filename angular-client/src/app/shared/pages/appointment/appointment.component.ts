import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from '../../../models/enums/role.enum';
import {MatDialog} from '@angular/material/dialog';
import {ViewAppointmentDialogComponent} from '../view-appointment-dialog/view-appointment-dialog.component';
import {AppointmentService} from "../../../services/appointment/appointment.service";
import {SubSink} from "subsink";
import {GenericTwoOptionDialogComponent} from "../generic-two-option-dialog/generic-two-option-dialog.component";
import {GenericTwoOptionDialogData} from "../../../models/generic-two-option-dialog-data";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})

export class AppointmentComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) public sort: MatSort;
  @Input() public roleInput: Role;
  @Input() public title = 'Title';

  public showActionDelete: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  private subSink: SubSink;

  constructor(public dialog: MatDialog, private appointmentService: AppointmentService) {
    this.subSink = new SubSink();
    this.displayedColumns = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine', 'actions'];
    this.subSink.add(this.appointmentService.getAppointments().subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res);
    }));
  }

  ngOnInit() {
    this.showActionDelete = this.roleInput === Role.PATIENT || this.roleInput === Role.HEALTH_PRACTITIONER;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openViewAppointmentDialog(element: any) {
    console.log(element);
    this.dialog.open(ViewAppointmentDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: true,
      autoFocus: false,
      data: element
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
