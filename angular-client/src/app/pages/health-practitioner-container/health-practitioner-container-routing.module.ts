import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HealthPractitionerContainerComponent} from './health-practitioner-container.component';
import {VaccineHistoryComponent} from '../../shared/pages/vaccine-history/vaccine-history.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HealthPractitionerContainerComponent,
    children: [

      {path: 'vaccineHistory', component: VaccineHistoryComponent},
      {path: 'test', component: TestComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthPractitionerContainerRoutingModule {
}
