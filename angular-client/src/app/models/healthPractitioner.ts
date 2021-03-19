import {Appointment} from './appointment';
import {Address} from './address';
import {Account} from './account.class';

export class HealthPractitioner extends Account {
  accountId: string;
  address: Address;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  upcomingAppointments: Appointment[];
}
