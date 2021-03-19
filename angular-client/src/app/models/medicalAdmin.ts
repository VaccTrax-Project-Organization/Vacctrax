import {IAccount} from './interfaces/account';
import {Appointment} from './appointment';
import {Address} from './address';
import {Account} from './account.class';

export class MedicalAdmin extends Account {
  accountId: string;
  address: Address;
  appointments: Appointment[];
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
}
