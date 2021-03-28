import {Appointment} from './appointment';
import {Address} from './address';
import {Account} from './account.class';

export class MedicalAdmin extends Account {
  appointments: Appointment[];
}
