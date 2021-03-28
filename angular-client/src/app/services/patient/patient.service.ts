import { Injectable } from '@angular/core';
import {Address} from '../../models/address.model';
import {Patient} from '../../models/patient.model';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Appointment} from '../../models/appointment.model';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';

@Injectable({
  providedIn: 'root'
})

export class PatientService extends Service{
  mockPatient: Patient = {
    _id: '',
    accountId: '1232',
    address: new Address(),
    appointments: [],
    email: 'email@gmail.com',
    firstName: 'June',
    lastName: 'Elder',
    healthCardNo: '123456-7890',
    phone: '',
  }

  constructor(private http: HttpClient) {
    super();
  }

  public getPatient(): Observable<Patient>{
    this.http.get(this.url, {headers: this.httpHeader} )
    return of(this.mockPatient);
  }

  public getPatientAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url + '/getAllAppointmentsByPatientId/605e313002e8ba38a71c700c', {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
