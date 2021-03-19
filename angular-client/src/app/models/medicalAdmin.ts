import {IAccount} from './account';
import {Appointment} from './appointment';
import {Address} from './address';

export interface IMedicalAdmin extends IAccount {
  appointments: Appointment[];
}

export class MedicalAdmin implements IMedicalAdmin {
  accountId: string;
  address: Address;
  appointments: Appointment[];
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
}
