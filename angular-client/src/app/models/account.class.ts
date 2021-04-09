import {Address} from './address.model';

export abstract class Account {
  constructor(public accountId = '',
              public firstName = '',
              public lastName = '',
              public email = '',
              public address: Address = new Address(),
              public phone = '',
              public password?: string) {
  }
}
