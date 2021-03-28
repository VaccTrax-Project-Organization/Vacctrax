import {AppointmentType} from './enums/appointment.enum';

export interface AppointmentRequest{
  reason: string;
  preferredDate: Date;
  preferredTime: Date;
  startTime?: Date;
  endTime?: Date;
  vaccineId: string;
  vaccineDose: string;
  type: AppointmentType;
  clinicId: string;
  patientId: string;
  healthPractitionerId?: string;
}
