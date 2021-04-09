export class BookAppointmentDTO {
  reason: string;
  preferredDate: Date;
  preferredTime: Date;
  startTime: Date;
  endTime: Date;
  vaccineDose: number;
  vaccineId: string;
  type: string;
  clinicId: string;
  patientId: string;
  healthPractitionerId: string;
}
