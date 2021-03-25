import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentComponent} from './appointment/appointment.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {GenericTwoOptionDialogComponent} from './generic-two-option-dialog/generic-two-option-dialog.component';
import {MaterialAngularModule} from '../../material-angular.module';


@NgModule({
  declarations: [
    AppointmentComponent,
    NavigationBarComponent,
    GenericTwoOptionDialogComponent
  ],
  exports: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule
  ]
})
export class SharedModule {
}
