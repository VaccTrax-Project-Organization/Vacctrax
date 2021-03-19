import {Appointment} from "./appointment";
import {Address} from './address';
import {HealthPractitioner} from './healthPractitioner';
import {MedicalAdmin} from './medicalAdmin';

export interface IClinic {
  address: Address;
  name: string;
  medicalAdmins: MedicalAdmin[];
  healthPractitioners: HealthPractitioner[];
  appointments: Appointment[];
}

export class Clinic implements IClinic {
  address: Address;
  appointments: Appointment[];
  healthPractitioners: HealthPractitioner[];
  medicalAdmins: MedicalAdmin[];
  name: string;
}
