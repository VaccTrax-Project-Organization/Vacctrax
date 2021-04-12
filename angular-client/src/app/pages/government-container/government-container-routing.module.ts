import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GovernmentContainerComponent} from './government-container.component';
import {GovernmentDashboardComponent} from './government-dashboard/government-dashboard.component';
import {VaccinesListComponent} from './vaccines-list/vaccines-list.component';

const routes: Routes = [
  {
    path: '',
    component: GovernmentContainerComponent,
    children: [

      {path: 'vaccinesList', component: VaccinesListComponent},
      {path: 'dashboard', component: GovernmentDashboardComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovernmentContainerRoutingModule {
}
