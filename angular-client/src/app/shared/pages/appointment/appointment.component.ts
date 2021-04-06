import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from '../../../models/enums/role.enum';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ViewAppointmentDialogComponent} from '../view-appointment-dialog/view-appointment-dialog.component';
import {SubSink} from 'subsink';
import {GenericTwoOptionDialogComponent} from '../generic-two-option-dialog/generic-two-option-dialog.component';
import {GenericTwoOptionDialogData} from '../../../models/generic-two-option-dialog-data';
import {Appointment} from '../../../models/appointment.model';
import {DeclineRequestedAppointmentDialogComponent} from '../../../pages/medical-admin-container/decline-requested-appointment-dialog/decline-requested-appointment-dialog.component';
import {UpdateAppointmentVaccineDetailsDialogComponent} from '../update-appointment-vaccine-details-dialog/update-appointment-vaccine-details-dialog.component';
import {AppointmentService} from 'src/app/services/appointment/appointment.service';
import {AppointmentType} from 'src/app/models/enums/appointment.enum';
import {ModifyAppointmentDetailsDialogComponent} from '../modify-appointment-details-dialog/modify-appointment-details-dialog.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})

export class AppointmentComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) public sort: MatSort;
  @Input() public roleInput: Role;
  @Output() modified: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
  set tableDataSource(data: MatTableDataSource<Appointment>) {
    this.dataSource = data;
  }

  public role: Role;
  public showActionDelete: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  constructor(public dialog: MatDialog, private appointmentService: AppointmentService) {
    this.subSink = new SubSink();
    this.displayedColumns = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine', 'comments', 'actions'];
    this.dataSource = new MatTableDataSource<Appointment>();
  }

  public ngOnInit() {
    this.showActionDelete = this.roleInput === Role.PATIENT || this.roleInput === Role.MEDICAL_ADMIN;
  }

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  emitModify(dialogRef: MatDialogRef<any>){
    this.subSink.add(dialogRef.afterClosed().subscribe(res => {
      if (res){
        this.modified.emit(true);
      }
    }));
  }
  public openEditAppointmentVaccineDetails(element: Appointment) {
    let dialogRef;
    if (this.role === Role.HEALTH_PRACTITIONER){
      dialogRef = this.dialog.open(UpdateAppointmentVaccineDetailsDialogComponent, {
        panelClass: 'dialog-panel-class',
        width: '650px',
        height: 'auto',
        disableClose: true,
        autoFocus: false,
        restoreFocus: false,
        data: element
      });
    }

    if (this.role === Role.HEALTH_PRACTITIONER){
      dialogRef = this.dialog.open(ModifyAppointmentDetailsDialogComponent, {
        panelClass: 'dialog-panel-class',
        width: '650px',
        height: 'auto',
        disableClose: true,
        autoFocus: false,
        restoreFocus: false,
        data: element
      });
    }

    if (dialogRef){
      this.emitModify(dialogRef);
    }
  }

  public openModifyAppointmentDetailsDialog(element: Appointment) {
    const dialogRef = this.dialog.open(ModifyAppointmentDetailsDialogComponent, {
      panelClass: 'dialog-panel-class',
      width: '650px',
      height: 'auto',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data: element
    });

    this.emitModify(dialogRef);
  }

  public openViewAppointmentDialog(element: Appointment) {
    console.log(element);
    this.dialog.open(ViewAppointmentDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: true,
      autoFocus: false,
      data: element,
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

  public openCancelVaccinationDialog(element: Appointment): void {
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
      if (res) {
        element.type = AppointmentType.CANCELLED;
        this.subSink.add(this.appointmentService.cancelAppointment(element).subscribe(declineAppointmentRes => {
          console.log('Check', declineAppointmentRes);
        }));
      }
    }));
  }
}
