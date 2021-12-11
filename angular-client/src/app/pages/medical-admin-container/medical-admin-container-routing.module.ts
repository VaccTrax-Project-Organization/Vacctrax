import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MedicalAdminContainerComponent} from './medical-admin-container.component';
import {MedicalAdminDashboardComponent} from './medical-admin-dashboard/medical-admin-dashboard.component';
import {EditPatientDetailsComponent} from './edit-patient-details/edit-patient-details.component';
import { InventoryStatisticsComponent } from './inventory-statistics/inventory-statistics.component';
import {AccountsManagementComponent} from './accounts-management/accounts-management.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalAdminContainerComponent,
    children: [
      {path: 'dashboard', component: MedicalAdminDashboardComponent},
      {path: 'editPatient', component: EditPatientDetailsComponent},
      {path: 'inventory', component: InventoryStatisticsComponent},
      {path: 'accountManagement', component: AccountsManagementComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalAdminContainerRoutingModule {
}
