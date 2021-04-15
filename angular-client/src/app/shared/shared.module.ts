import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentComponent} from './pages/appointment/appointment.component';
import {NavigationBarComponent} from './pages/navigation-bar/navigation-bar.component';
import {GenericTwoOptionDialogComponent} from './pages/generic-two-option-dialog/generic-two-option-dialog.component';
import {MaterialAngularModule} from '../material-angular.module';
import {ViewAppointmentDialogComponent} from './pages/appointment/view-appointment-dialog/view-appointment-dialog.component';
import {PatientFullNamePipe} from './pipes/patient.pipe';
import {RolePipe} from './pipes/role.pipe';
import {VaccineHistoryComponent} from './pages/vaccine-history/vaccine-history.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModifyAppointmentDetailsDialogComponent} from './pages/appointment/modify-appointment-details-dialog/modify-appointment-details-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { CreateAppointmentDialogComponent } from './pages/appointment/create-appointment-dialog/create-appointment-dialog.component';
import { AddUpdateVaccineDialogComponent } from './pages/add-update-vaccine-dialog/add-update-vaccine-dialog.component';
import { PasswordPipe } from './pipes/password/password.pipe';

@NgModule({
  declarations: [
    AppointmentComponent,
    NavigationBarComponent,
    GenericTwoOptionDialogComponent,
    ViewAppointmentDialogComponent,
    RolePipe,
    PatientFullNamePipe,
    VaccineHistoryComponent,
    ModifyAppointmentDetailsDialogComponent,
    CreateAppointmentDialogComponent,
    AddUpdateVaccineDialogComponent,
    PasswordPipe,
  ],

  exports: [
    NavigationBarComponent,
    AppointmentComponent,
    RolePipe,
    PatientFullNamePipe,
    PasswordPipe,
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
