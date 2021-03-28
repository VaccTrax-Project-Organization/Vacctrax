import {Patient} from './patient';
import {Clinic} from './clinic';
import {AppointmentType} from './enums/appointment.enum';

export class Appointment {
  constructor(public appointmentId: number,
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
