import {Appointment} from './appointment.model';
import {Account} from './account.class';

export class Patient {
  constructor(public _id: string,
              public appointments: Appointment[] | string[],
              public account:  Account | string,
              public healthCardNo: string) {
    this.appointments = [];
  }
}
