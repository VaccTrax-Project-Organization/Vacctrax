import {Appointment} from './appointment';
import {Address} from './address';
import {HealthPractitioner} from './healthPractitioner';
import {MedicalAdmin} from './medicalAdmin';

export class Clinic {
  address: Address;
  appointments: Appointment[];
  healthPractitioners: HealthPractitioner[];
  medicalAdmins: MedicalAdmin[];
  name: string;
}
