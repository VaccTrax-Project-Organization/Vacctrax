import {Patient} from './patient';
import {Clinic} from './clinic';

export interface IAppointment {
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

export class Appointment implements IAppointment {
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

export enum AppointmentType {
  CONFIRMED,
  REQUESTED,
  CANCELLED,
  COMPLETED,
}
