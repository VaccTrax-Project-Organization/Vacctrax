import {AppointmentType} from './enums/appointment.enum';

export interface AppointmentRequest{
  reason: string;
  preferredDate: string;
  preferredTime: string;
  startTime?: string;
  endTime?: string;
  vaccine: string;
  vaccineDose: string;
  type: AppointmentType;
  clinic: string;
  patient: string;
  healthPractitioner?: string;
}
