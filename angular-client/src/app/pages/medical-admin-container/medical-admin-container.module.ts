import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalAdminContainerComponent } from './medical-admin-container.component';
import { MedicalAdminDashboardComponent } from './medical-admin-dashboard/medical-admin-dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {MedicalAdminContainerRoutingModule} from './medical-admin-container-routing.module';
import {MaterialAngularModule} from '../../material-angular.module';
import { ModifyAppointmentDetailsComponent } from './modify-appointment-details/modify-appointment-details.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeclineRequestedAppointmentDialogComponent } from './decline-requested-appointment-dialog/decline-requested-appointment-dialog.component';
import { EditPatientDetailsComponent } from './edit-patient-details/edit-patient-details.component';
import { InventoryStatisticsGraphComponent } from './inventory-statistics-graph/inventory-statistics-graph.component';
import { ChartsModule } from 'ng2-charts';
import { AccountsManagementComponent } from './accounts-management/accounts-management.component';
import { ViewAccountDetailsDialogComponent } from './view-account-details-dialog/view-account-details-dialog.component';
import { EditAccountDetailsDialogComponent } from './edit-account-details-dialog/edit-account-details-dialog.component';
import { QuantityDialogComponent } from './inventory-statistics/quantity-dialog/quantity-dialog.component';

@NgModule({
  declarations: [MedicalAdminContainerComponent, MedicalAdminDashboardComponent, ModifyAppointmentDetailsComponent, DeclineRequestedAppointmentDialogComponent, EditPatientDetailsComponent, AccountsManagementComponent, ViewAccountDetailsDialogComponent, EditAccountDetailsDialogComponent, InventoryStatisticsGraphComponent, QuantityDialogComponent],
  imports: [
    FormsModule,
    MedicalAdminContainerRoutingModule,
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialAngularModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    ChartsModule,
  ]
})
export class MedicalAdminContainerModule { }
