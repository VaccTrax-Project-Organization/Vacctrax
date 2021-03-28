import {Address} from './address.model';

export abstract class Account {
  constructor(public accountId = '',
              public firstName = '',
              public lastName = '',
              public email = '',
              public password?: string,
              public address = new Address(),
              public  phone = '') {
  }
}
