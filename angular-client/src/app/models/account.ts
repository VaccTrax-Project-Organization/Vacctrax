import {Address} from './address';

export interface IAccount {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: Address;
  phone: string;
}

export class Account implements IAccount {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: Address;
  phone: string;
}
