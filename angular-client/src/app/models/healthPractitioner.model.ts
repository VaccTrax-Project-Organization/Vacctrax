import {Appointment} from './appointment';
import {Address} from './address';
import {Account} from './account.class';

export class HealthPractitioner extends Account {
  upcomingAppointments: Appointment[];
}
