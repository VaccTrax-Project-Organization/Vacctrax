import {Appointment} from './appointment';
import {IAccount} from "./account";
import {Address} from "./address";

export interface IPatient extends IAccount {
  patientId: string;
  healthCard: string;
  appointments: Appointment[];
}

export class Patient implements IPatient {
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
}
