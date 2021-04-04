import {Appointment} from './appointment.model';
import {Account} from './account.class';
import {Clinic} from './clinic.model';

export class HealthPractitioner extends Account {
  constructor(public _id: number,
              public account: Account,
              public clinic: Clinic) {
    super();
  }
}
