import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {AppointmentComponent} from './shared/appointment/appointment.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'appointment', component: AppointmentComponent},
  {
    path: 'patient',
    loadChildren: () => import('./pages/patient-container/patient-container.module').then(m => m.PatientContainerModule)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
