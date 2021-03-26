import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './angular.material';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppointmentComponent } from './pages/shared/appointment/appointment.component';
import { NavigationBarComponent } from './pages/shared/navigation-bar/navigation-bar.component';
import { MaterialAngularModule } from './material-angular.module';
import { GenericTwoOptionDialogComponent } from './pages/shared/generic-two-option-dialog/generic-two-option-dialog.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';
import { ConfirmedAppointmentsComponent } from './pages/confirmed-appointments/confirmed-appointments.component';
import { ViewAppointmentDialogComponent } from './pages/shared/view-appointment-dialog/view-appointment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppointmentComponent,
    NavigationBarComponent,
    GenericTwoOptionDialogComponent,
    AppointmentDetailsComponent,
    ConfirmedAppointmentsComponent,
    ViewAppointmentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MaterialAngularModule,
  ],
  providers: [],
  exports: [
    AppointmentComponent,
    NavigationBarComponent
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
