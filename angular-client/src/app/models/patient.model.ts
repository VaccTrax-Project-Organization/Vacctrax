import {Appointment} from './appointment.model';
import {Account} from './account.class';

export class Patient {
  constructor(public _id: string = '',
              public appointments: Appointment[] = null,
              public account: Account = null,
              public healthCardNo: string = '',) {
    this.appointments = [];
  }
}
