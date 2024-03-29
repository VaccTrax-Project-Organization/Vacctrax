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
import {SigninComponent} from './pages/signin/signin.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { InventoryStatisticsComponent } from './pages/medical-admin-container/inventory-statistics/inventory-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppointmentDetailsComponent,
    ConfirmedAppointmentsComponent,
    UpdateAppointmentVaccineDetailsDialogComponent,
    SignupComponent,
    SigninComponent,
    CheckInComponent,
    SetPasswordComponent,
    CheckEmailComponent,
    InventoryStatisticsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
