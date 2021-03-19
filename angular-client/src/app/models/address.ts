export interface IAddress {
  streetLine1: string;
  streetLine2: string;
  postalCode: string;
  province: string;
  city: string;
}

export class Address implements IAddress {
  streetLine1: string;
  streetLine2: string;
  postalCode: string;
  province: string;
  city: string;
}
