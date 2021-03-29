import {Role} from '../enums/role.enum';
import {Appointment} from '../appointment.model';

export interface ViewAppointmentDialogInterface {
  role: Role;
  appointment: Appointment;
}
