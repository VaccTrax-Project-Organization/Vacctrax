import {AppointmentType} from './enums/appointment.enum';

export interface AppointmentRequest{
  reason: string;
  preferredDate: string;
  preferredTime: string;
  startTime?: string;
  endTime?: string;
  vaccineId: string;
  vaccineDose: string;
  type: AppointmentType;
  clinicId: string;
  patientId: string;
  healthPractitionerId?: string;
}
