import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentComponent} from './pages/appointment/appointment.component';
import {NavigationBarComponent} from './pages/navigation-bar/navigation-bar.component';
import {GenericTwoOptionDialogComponent} from './pages/generic-two-option-dialog/generic-two-option-dialog.component';
import {MaterialAngularModule} from '../material-angular.module';
import {ViewAppointmentDialogComponent} from './pages/view-appointment-dialog/view-appointment-dialog.component';
import {PatientFullNamePipe} from './pipes/patient.pipe';
import {RolePipe} from './pipes/role.pipe';
import {VaccineHistoryComponent} from './pages/vaccine-history/vaccine-history.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModifyAppointmentDetailsDialogComponent} from './pages/modify-appointment-details-dialog/modify-appointment-details-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppointmentComponent,
    NavigationBarComponent,
    GenericTwoOptionDialogComponent,
    ViewAppointmentDialogComponent,
    RolePipe,
    PatientFullNamePipe,
    VaccineHistoryComponent,
    ModifyAppointmentDetailsDialogComponent
  ],

  exports: [
    NavigationBarComponent,
    AppointmentComponent,
    RolePipe,
    PatientFullNamePipe
  ],

  imports: [
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ]
})

export class SharedModule {
}
