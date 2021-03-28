import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalAdminContainerComponent } from './medical-admin-container.component';
import { MedicalAdminDashboardComponent } from './medical-admin-dashboard/medical-admin-dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {MedicalAdminContainerRoutingModule} from './medical-admin-container-routing.module';
import {MaterialAngularModule} from "../../material-angular.module";
import { ModifyAppointmentDetailsComponent } from './modify-appointment-details/modify-appointment-details.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MedicalAdminContainerComponent, MedicalAdminDashboardComponent, ModifyAppointmentDetailsComponent],
  imports: [
    MedicalAdminContainerRoutingModule,
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialAngularModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ]
})
export class MedicalAdminContainerModule { }
