import {Patient} from './patient.model';
import {Clinic} from './clinic.model';
import {AppointmentType} from './enums/appointment.enum';
import {HealthPractitioner} from './healthPractitioner.model';
import {Vaccine} from './vaccine.model';

export class Appointment {
  constructor(public _id: string,
              public clinic: Clinic | string ,
              public healthPractitioner: HealthPractitioner | string,
              public vaccine:  Vaccine | string,
              public reason: string,
              public preferredDate: Date,
              public preferredTime: Date,
              public startTime: Date,
              public endTime: Date,
              public type: AppointmentType,
              public patient: Patient | string ) {
  }
}
