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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppointmentComponent,
    NavigationBarComponent,
    GenericTwoOptionDialogComponent
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
