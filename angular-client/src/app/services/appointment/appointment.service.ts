import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Appointment} from '../../models/appointment.model';
import {AppointmentRequest} from '../../models/appointment-request.model';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService extends Service{
  constructor(private http: HttpClient) {
    super();
  }

  public getAppointments(): Observable<any>{
    return of(MOCK_APPOINTMENTS);
  }

  public requestAppointment(appointment: AppointmentRequest): Observable<Appointment>{
    return this.http.post<Appointment>(this.url + '/requestAppointment', appointment, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}

const MOCK_APPOINTMENTS = [
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },{
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },
  {
    patientName: 'June Elder',
    appointmentDateTime: 'January 1 2021 at 4:30 pm',
    practitionerName: 'Dr.Drake',
    status: 'Requested',
    vaccine: 'Pfizer'
  },

];
