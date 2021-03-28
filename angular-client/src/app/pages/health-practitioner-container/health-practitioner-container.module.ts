import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthPractitionerContainerRoutingModule} from './health-practitioner-container-routing.module';
import {MaterialAngularModule} from '../../material-angular.module';
import {SharedModule} from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import {HealthPractitionerContainerComponent} from './health-practitioner-container.component';



@NgModule({
  declarations: [TestComponent, HealthPractitionerContainerComponent],
  imports: [
    CommonModule,
    HealthPractitionerContainerRoutingModule,
    MaterialAngularModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class HealthPractitionerContainerModule { }
