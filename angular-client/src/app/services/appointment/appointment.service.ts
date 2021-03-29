import {Injectable} from '@angular/core';
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

export class AppointmentService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  public requestAppointment(appointment: AppointmentRequest): Observable<Appointment>{
    return this.http.post<Appointment>(this.url + '/requestAppointment', appointment, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public updateAppointmentVaccine(appointment: any): Observable<Appointment> {
    return this.http.put<Appointment>(this.url + '/appointments/' + appointment.id , appointment, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

 
  public getConfirmedAppointmentsByClinicId(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url + '/getConfirmedAppointmentsByClinicId/6060e1549107f28980861695', {headers: this.httpHeader})
  }
  public declineAppointment(): Observable<Appointment[]>{
    return this.http.put<Appointment[]>(this.url + '/declineAppointment/6060e1549107f28980861695', {headers: this.httpHeader})
 
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
