import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from '../../../models/enums/role.enum';
import {MatDialog} from '@angular/material/dialog';
import {ViewAppointmentDialogComponent} from '../view-appointment-dialog/view-appointment-dialog.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})

export class AppointmentComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) public sort: MatSort;
  @Input() public roleInput: Role;
  @Input() public title = 'Title';
  @Input()
  set tableDataSource(data) {
    this.dataSource = new MatTableDataSource<any>(data);

  }
  public showActionDelete: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;

  constructor(public dialog: MatDialog) {
     this.displayedColumns = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine', 'comments', 'actions'];
    // this.displayedColumns = [ 'vaccine', 'actions'];
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
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
}

export interface PeriodicElement {
  patientName: string;
  appointmentDateTime: string;
  practitionerName: string;
  status: string;
  vaccine: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'Bob Barker',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'Jonathan Joestar',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'John Henry',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
];
