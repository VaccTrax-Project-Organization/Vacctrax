import {Appointment} from './appointment.model';
import {Address} from './address.model';
import {HealthPractitioner} from './healthPractitioner.model';
import {MedicalAdmin} from './medicalAdmin.model';

export class Clinic {
  constructor(public _id: string,
              public address:  Address,
              public name: string) {
  }
}
