import {Address} from './address';

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
