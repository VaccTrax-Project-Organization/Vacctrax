import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientContainerComponent} from './patient-container.component';
import {RequestAppointmentComponent} from './request-appointment/request-appointment.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PatientContainerComponent,
    children: [
      {path: 'requestAppointment', component: RequestAppointmentComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientContainerRoutingModule {
}
