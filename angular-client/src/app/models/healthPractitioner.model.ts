import {Appointment} from './appointment.model';
import {Account} from './account.class';
import {Clinic} from './clinic.model';

export class HealthPractitioner extends Account {
  firstName: string;
  lastname: string;
  constructor(public _id: string = null,
              public account: Account = null,
              public clinic: Clinic = new Clinic()) {
    super();
  }
}
