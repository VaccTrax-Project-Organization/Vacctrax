import {Appointment} from './appointment.model';
import {Account} from './account.class';

export class HealthPractitioner extends Account {
  upcomingAppointments: Appointment[];
}
