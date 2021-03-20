import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientContainerRoutingModule} from './patient-container-routing.module';
import {RequestAppointmentComponent} from './request-appointment/request-appointment.component';
import {PatientContainerComponent} from './patient-container.component';
import { MaterialAngularModule } from 'src/app/material-angular.module';

@NgModule({
  declarations: [
    PatientContainerComponent,
    RequestAppointmentComponent],
  imports: [
    CommonModule,
    PatientContainerRoutingModule,
    MaterialAngularModule,
  ]
})

export class PatientContainerModule {
}
