import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {AppointmentComponent} from './pages/shared/appointment/appointment.component';
import {DashboardComponent} from "./pages/patient-container/dashboard/dashboard.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'dashboard', component: DashboardComponent},
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
