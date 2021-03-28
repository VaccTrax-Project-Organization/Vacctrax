import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MedicalAdminContainerComponent} from './medical-admin-container.component';
import {MedicalAdminDashboardComponent} from './medical-admin-dashboard/medical-admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalAdminContainerComponent,
    children: [
      {path: 'dashboard', component: MedicalAdminDashboardComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalAdminContainerRoutingModule {
}
