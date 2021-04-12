import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {MaterialAngularModule} from './material-angular.module';
import {SharedModule} from './shared/shared.module';
import {AppointmentDetailsComponent} from './pages/appointment-details/appointment-details.component';
import {ConfirmedAppointmentsComponent} from './pages/confirmed-appointments/confirmed-appointments.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {UpdateAppointmentVaccineDetailsDialogComponent} from './shared/pages/appointment/update-appointment-vaccine-details-dialog/update-appointment-vaccine-details-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppointmentDetailsComponent,
    ConfirmedAppointmentsComponent,
    UpdateAppointmentVaccineDetailsDialogComponent,
    SignupComponent,
    CheckInComponent,
    SetPasswordComponent,
    CheckEmailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
