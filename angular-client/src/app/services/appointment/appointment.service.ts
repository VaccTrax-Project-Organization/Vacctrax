import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url = environment.apiUrl;
  httpHeader = new HttpHeaders({'Content-Type': 'application/JSON'});

  constructor(private http: HttpClient) { }

  public getAppointments(): Observable<any>{
    return of(MOCK_APPOINTMENTS);
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
