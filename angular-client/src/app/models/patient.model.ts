import {Appointment} from './appointment.model';
import {Account} from './account.class';

export class Patient extends Account {
  constructor(public _id: string,
              public appointments: Appointment[],
              public healthCardNo: string,
              public patientId: string,) {
    super();
    this.appointments = [];
  }
}
