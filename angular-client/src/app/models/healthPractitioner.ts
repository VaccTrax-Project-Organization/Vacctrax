import {IAccount} from './account';
import {Appointment} from './appointment';
import {Address} from './address';

export interface IHealthPractitioner extends IAccount {
  upcomingAppointments: Appointment[];
}

export class HealthPractitioner implements IHealthPractitioner {
  accountId: string;
  address: Address;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  upcomingAppointments: Appointment[];
}
