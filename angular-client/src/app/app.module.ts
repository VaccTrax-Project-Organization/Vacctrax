import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {NavigationBarComponent} from './pages/shared/navigation-bar/navigation-bar.component';
import {MaterialAngularModule} from './material-angular.module';
import {SharedModule} from './pages/shared/shared.module';
import {AppointmentDetailsComponent} from './pages/appointment-details/appointment-details.component';
import {ConfirmedAppointmentsComponent} from './pages/confirmed-appointments/confirmed-appointments.component';
import { RolePipe } from './pipes/role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppointmentDetailsComponent,
    ConfirmedAppointmentsComponent,
    RolePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    SharedModule
  ],
  providers: [],
  exports: [
    NavigationBarComponent,
    RolePipe
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}
