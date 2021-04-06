import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GovernmentContainerComponent} from './government-container.component';
import {GovernmentContainerRoutingModule} from './government-container-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {GovernmentDashboardComponent} from './government-dashboard/government-dashboard.component';
import {MaterialAngularModule} from '../../material-angular.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {VaccinesListComponent} from './vaccines-list/vaccines-list.component';


@NgModule({
  declarations: [GovernmentContainerComponent, GovernmentDashboardComponent, VaccinesListComponent],
  imports: [
    CommonModule,
    GovernmentContainerRoutingModule,
    SharedModule,
    MaterialAngularModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class GovernmentContainerModule {
}
