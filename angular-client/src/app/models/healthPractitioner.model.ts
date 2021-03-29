import {Appointment} from './appointment.model';
import {Account} from './account.class';
import {Clinic} from './clinic.model';

export class HealthPractitioner extends Account {
  upcomingAppointments: Appointment[];
  account: Account;
  clinic: Clinic;
}
