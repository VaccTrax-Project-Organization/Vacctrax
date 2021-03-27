import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientContainerComponent} from './patient-container.component';
import {RequestAppointmentComponent} from './request-appointment/request-appointment.component';
import {FailedEligibilityCheckComponent} from './failed-eligibility-check/failed-eligibility-check.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: PatientContainerComponent,
    children: [
      {path: 'requestAppointment', component: RequestAppointmentComponent},
      {path: 'failedEligibilityCheck', component: FailedEligibilityCheckComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientContainerRoutingModule {
}
