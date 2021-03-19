import {Address} from './address';
import {IAccount} from './interfaces/account';

export abstract class Account implements IAccount {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: Address;
  phone: string;

  constructor() {

  }
}
