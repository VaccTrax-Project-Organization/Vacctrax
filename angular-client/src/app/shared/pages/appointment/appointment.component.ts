import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from '../../../models/enums/role.enum';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ViewAppointmentDialogComponent} from './view-appointment-dialog/view-appointment-dialog.component';
import {SubSink} from 'subsink';
import {GenericTwoOptionDialogComponent} from '../generic-two-option-dialog/generic-two-option-dialog.component';
import {GenericTwoOptionDialogData} from '../../../models/generic-two-option-dialog-data';
import {Appointment} from '../../../models/appointment.model';
import {DeclineRequestedAppointmentDialogComponent} from '../../../pages/medical-admin-container/decline-requested-appointment-dialog/decline-requested-appointment-dialog.component';
import {UpdateAppointmentVaccineDetailsDialogComponent} from './update-appointment-vaccine-details-dialog/update-appointment-vaccine-details-dialog.component';
import {AppointmentService} from 'src/app/services/appointment/appointment.service';
import {AppointmentType} from 'src/app/models/enums/appointment.enum';
import {ModifyAppointmentDetailsDialogComponent} from './modify-appointment-details-dialog/modify-appointment-details-dialog.component';
import {
  CreateAppointmentDialogComponent,
  CreateAppointmentDialogModel
} from './create-appointment-dialog/create-appointment-dialog.component';
import { concatMap, filter, map } from 'rxjs/operators';
import { getUserDetails } from '../../Functions/getUserDetails';

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

  public role = Role;
  public showActionDelete: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog, private appointmentService: AppointmentService) {
    this.subSink = new SubSink();
    this.displayedColumns = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine', 'comments', 'actions'];
    this.dataSource = new MatTableDataSource<Appointment>();
  }

  public ngOnInit() {
    this.showActionDelete = this.roleInput === Role.PATIENT || this.roleInput === Role.MEDICAL_ADMIN || this.roleInput === Role.HEALTH_PRACTITIONER;

    const appointment = this.router.getCurrentNavigation()?.extras?.state?.appointment;
    if (appointment) {
      this.openViewAppointmentDialog(appointment);
    }
  }

  /*
  * When the component view is initialized the sort
  * for the table is added to the datasource
  */
  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    const patientId = getUserDetails().id;

    this.activatedRoute.paramMap.pipe(
      map(() => window.history.state),
      concatMap(res => this.appointmentService.getAppointmentsById(res.appointment.payload.id)),
    )
    .subscribe(appt=>{
      if (appt) {
        if (appt) {
          this.openViewAppointmentDialog(appt);
        }
      }
    })
  }

  /*
  * When the component is destroyed the observables
  * in the subsink are unsubscribed to prevent memory leaks
  */
  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  /*
  * Emit a modify even to the parent component to refresh the table
  */
  emitModify(dialogRef: MatDialogRef<any>) {
    this.subSink.add(dialogRef.afterClosed().subscribe(res => {
        this.modified.emit(true);
    }));
  }

  /*
  * When the add new button is clicked this method evaluates the roleInput
  * and opens the appropriate dialog
  */
  public addNewClicked() {
    let dialogRef;

    if (this.roleInput === Role.MEDICAL_ADMIN) {
      dialogRef = this.dialog.open(CreateAppointmentDialogComponent, {
        panelClass: 'dialog-panel-class',
        width: '650px',
        height: 'auto',
        disableClose: true,
        autoFocus: false,
        restoreFocus: false,
        data: {role: this.roleInput} as CreateAppointmentDialogModel
      });
    }

    if (this.roleInput === Role.PATIENT) {
      this.router.navigate(['./patient/requestAppointment']);
    }

    // other dialog here
    if (dialogRef) {
      this.emitModify(dialogRef);
    }
  }

  /*
  * When the edit button is clicked this method evaluates the roleInput
  * and opens the appropriate dialog
  */
  public openModifyAppointmentDetailsDialog(element: Appointment) {
    let dialogRef;
    console.log(this.roleInput);

    switch(this.roleInput){
      case Role.MEDICAL_ADMIN:
        dialogRef = this.dialog.open(ModifyAppointmentDetailsDialogComponent, {
          panelClass: 'dialog-panel-class',
          width: '650px',
          height: 'auto',
          disableClose: true,
          autoFocus: false,
          restoreFocus: false,
          data: element
        });
        break;

      case Role.HEALTH_PRACTITIONER:
        dialogRef = this.dialog.open(UpdateAppointmentVaccineDetailsDialogComponent, {
          panelClass: 'dialog-panel-class',
          width: '650px',
          height: 'auto',
          disableClose: true,
          autoFocus: false,
          restoreFocus: false,
          data: element
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          if (result) {
            this.subSink.add(this.appointmentService.getAppointmentsByPatient().subscribe(res => {
              console.log(res);
              // @ts-ignore
              this.dataSource = res;
            }, error => {
              console.log(error);
            }));
          }
        });
        break;

      case Role.PATIENT:
        dialogRef = this.dialog.open(CreateAppointmentDialogComponent, {
          panelClass: 'dialog-panel-class',
          width: '650px',
          height: 'auto',
          disableClose: true,
          autoFocus: false,
          restoreFocus: false,
          data: {appointment: element, role: this.roleInput} as CreateAppointmentDialogModel
        });
        break;
      default:
        break;
    }


    if (dialogRef) {
      this.emitModify(dialogRef);
    }
  }

  /*
  * When the view button is clicked the view appointment dialog is opened
  */
  public openViewAppointmentDialog(element: Appointment) {
    console.log(element);
    const dialogRef = this.dialog.open(ViewAppointmentDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: true,
      autoFocus: false,
      data: element,
    });

    this.emitModify(dialogRef);
  }

  /*
  * When the view button is clicked the decline appointment dialog is opened
  */
  public openDeclineAppointmentRequestDialog(element: Appointment): void {
    this.dialog.open(DeclineRequestedAppointmentDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: false,
      autoFocus: false,
      height: '400px',
      width: '650px',
      data: element
    });
  }

  /*
  * When the view button is clicked the generic dialog is opened
  */
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
