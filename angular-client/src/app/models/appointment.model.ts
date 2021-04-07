import {Patient} from './patient.model';
import {Clinic} from './clinic.model';
import {AppointmentType} from './enums/appointment.enum';
import {HealthPractitioner} from './healthPractitioner.model';
import {Vaccine} from './vaccine.model';

export class Appointment {
  constructor(public _id: string = '',
              public clinic: Clinic = new Clinic(),
              public healthPractitioner: HealthPractitioner = new HealthPractitioner(),
              public vaccine: Vaccine = new Vaccine(),
              public vaccineDose: string = '',
              public reason: string = '',
              public preferredDate: Date = null,
              public preferredTime: Date = null,
              public startTime: Date = null,
              public endTime: Date = null,
              public type: AppointmentType = null,
              public patient: Patient = new Patient()) {
  }
}
