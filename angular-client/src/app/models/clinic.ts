import {Appointment} from './appointment';
import {Address} from './address';
import {HealthPractitioner} from './healthPractitioner';
import {MedicalAdmin} from './medicalAdmin';

export class Clinic {
  constructor(public address: Address,
              public appointments: Appointment[],
              public healthPractitioners: HealthPractitioner[],
              public medicalAdmins: MedicalAdmin[],
              public name: string) {
  }
}
