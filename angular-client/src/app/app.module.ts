import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './angular.material';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ViewAppointmentsComponent } from './pages/patient/view-appointments/view-appointments.component';
import { AppointmentComponent } from './pages/patient/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewAppointmentsComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
