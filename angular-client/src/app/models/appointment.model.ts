import {Patient} from './patient.model';
import {Clinic} from './clinic.model';
import {AppointmentType} from './enums/appointment.enum';

export class Appointment {
  constructor(public _id: string,
              public clinic: Clinic,
              public reason: string,
              public preferredDate: Date,
              public preferredTime: Date,
              public startTime: Date,
              public endTime: Date,
              public type: AppointmentType,
              public patient: Patient) {
  }
}
