import {Appointment} from './appointment';
import {Account} from './account.class';

export class Patient extends Account {
  constructor(public appointments: Appointment[],
              public healthCard: string,
              public patientId: string,) {
    super();
    this.appointments = [];
  }
}
