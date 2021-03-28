import {Appointment} from './appointment.model';
import {Account} from './account.class';

export class MedicalAdmin extends Account {
  appointments: string[] | Appointment[];
  account: string | Account;
}
