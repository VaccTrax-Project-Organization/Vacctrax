import {Appointment} from './appointment.model';
import {Account} from './account.class';
import {Address} from './address.model';

export class Patient {
  constructor(public _id: string = '',
              public appointments: Appointment[] = null,
              public account: Account = null,
              public accountId = '',
              public firstName = '',
              public lastName = '',
              public email = '',
              public address: Address = new Address(),
              public phone = '',
              public password?: string,
              public healthCardNo: string = '',) {
    this.appointments = [];
  }
}
