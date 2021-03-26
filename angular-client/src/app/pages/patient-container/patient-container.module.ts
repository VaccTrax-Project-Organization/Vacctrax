import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientContainerRoutingModule} from './patient-container-routing.module';
import {RequestAppointmentComponent} from './request-appointment/request-appointment.component';
import {PatientContainerComponent} from './patient-container.component';
import {MaterialAngularModule} from 'src/app/material-angular.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {FailedEligibilityCheckComponent} from './failed-eligibility-check/failed-eligibility-check.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    PatientContainerComponent,
    RequestAppointmentComponent,
    DashboardComponent,
    FailedEligibilityCheckComponent,
  ],
  imports: [
    CommonModule,
    PatientContainerRoutingModule,
    MaterialAngularModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    SharedModule,
    AppModule
  ]
})

export class PatientContainerModule {
}
