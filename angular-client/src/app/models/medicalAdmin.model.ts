import {Appointment} from './appointment.model';
import {Account} from './account.class';

export class MedicalAdmin extends Account {
  appointments: Appointment[] | string[];
  account: Account;
}
