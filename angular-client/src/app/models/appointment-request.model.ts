import {AppointmentType} from './enums/appointment.enum';

export interface AppointmentRequest{
  reason: string;
  preferredDate: Date;
  preferredTime: Date;
  startTime: Date;
  endTime: Date;
  type: AppointmentType;
  clinicId: string;
  patientId: string;
  healthPractitionerId: string;
}
