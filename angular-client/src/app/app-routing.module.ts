import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppointmentDetailsComponent} from './pages/appointment-details/appointment-details.component';
import {ConfirmedAppointmentsComponent} from './pages/confirmed-appointments/confirmed-appointments.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {AppointmentComponent} from './shared/pages/appointment/appointment.component';
import {SignupComponent} from './pages/signup/signup.component';
import {SigninComponent} from './pages/signin/signin.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { SetPasswordGuard } from './guards/set-password.guard';
import { CheckEmailComponent } from './pages/check-email/check-email.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'checkin', component: CheckInComponent},
  {path: 'signin', component: SigninComponent},
  {
    path: 'patient',
    loadChildren: () => import('./pages/patient-container/patient-container.module').then(m => m.PatientContainerModule)
  },
  {
    path: 'healthPractitioner',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/health-practitioner-container/health-practitioner-container.module').then(m => m.HealthPractitionerContainerModule)
  },

  {
    path: 'medicalAdmin',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/medical-admin-container/medical-admin-container.module').then(m => m.MedicalAdminContainerModule)
  },
  {
    path: 'government',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./pages/government-container/government-container.module').then(m => m.GovernmentContainerModule)
  },
  {path: 'appointmentdetails', component: AppointmentDetailsComponent},
  {path: 'confirmedappointment', component: ConfirmedAppointmentsComponent},
  {path: 'setPassword/:token', component: SetPasswordComponent, canActivate: [SetPasswordGuard]},
  {path: 'checkEmail', component: CheckEmailComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
