import {Patient} from './patient';
import {Clinic} from './clinic';
import {AppointmentType} from './enums/appointment.enum';

export class Appointment {
  appointmentId: number;
  clinic: Clinic;
  reason: string;
  preferredDate: Date;
  preferredTime: Date;
  startTime: Date;
  endTime: Date;
  type: AppointmentType;
  patient: Patient;
}
