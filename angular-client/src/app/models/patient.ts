import {Appointment} from './appointment';
import {Address} from './address';
import {Account} from './account.class';

export class Patient extends Account {
  appointments: Appointment[];
  healthCard: string;
  patientId: string;
  accountId: string;
  address: Address;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;

  constructor() {
    super();
    this.appointments = [];
  }
}
