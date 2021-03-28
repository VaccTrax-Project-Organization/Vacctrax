import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppointmentDetailsComponent} from './pages/appointment-details/appointment-details.component';
import {ConfirmedAppointmentsComponent} from './pages/confirmed-appointments/confirmed-appointments.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {AppointmentComponent} from './shared/pages/appointment/appointment.component';
import {VaccineHistoryComponent} from './shared/pages/vaccine-history/vaccine-history.component';
import {DashboardComponent} from './pages/patient-container/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'appointment', component: AppointmentComponent},
  {
    path: 'patient',
    loadChildren: () => import('./pages/patient-container/patient-container.module').then(m => m.PatientContainerModule)
  },
  {
    path: 'healthPractitioner',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/health-practitioner-container/health-practitioner-container.module').then(m => m.HealthPractitionerContainerModule)
  },

  {path: 'appointmentdetails', component: AppointmentDetailsComponent},
  {path: 'confirmedappointment', component: ConfirmedAppointmentsComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
