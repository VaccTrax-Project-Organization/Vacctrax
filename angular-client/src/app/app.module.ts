import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './angular.material';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppointmentComponent } from './pages/shared/appointment/appointment.component';
import { PatientContainerComponent } from './pages/patient-container/patient-container.component';
import { MaterialAngularModule } from './material-angular.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MaterialAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
