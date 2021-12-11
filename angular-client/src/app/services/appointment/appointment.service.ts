import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Appointment} from '../../models/appointment.model';
import {AppointmentRequest} from '../../models/appointment-request.model';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';
import {BookAppointmentDTO} from '../../shared/Models/bookAppointmentDTO';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  public getAppointmentsByPatient(patientId = '6060df3ac0edd45cd49d2f5a'): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/getAllAppointmentsByPatientId/${patientId}`, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public getAppointmentsByClinic(clinicId = '6060e1549107f28980861695'): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/getAllAppointmentsByClinicId/${clinicId}`, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public getConfirmedAppointmentsByClinicId(clinicId = '6060e1549107f28980861695'): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/getConfirmedAppointmentsByClinicId/${clinicId}`, {headers: this.httpHeader}).pipe(
      catchError(err => {
        return throwError(err);
      }));
  }

  public requestAppointment(appointment: any): Observable<Appointment>{
    return this.http.post<Appointment>(this.url + '/requestAppointment', appointment, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public updateAppointment(appointment: any): Observable<any>{
    return this.http.put<Appointment>(`${this.url}/appointments/${appointment._id}`, appointment, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public updateAppointmentVaccine(appointment: any): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.url}/appointments/${appointment.id}` , appointment, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public declineAppointment(appointmentId = '6060e1549107f28980861695'): Observable<Appointment[]> {
    return this.http.put<Appointment[]>(`${this.url}/declineAppointment/${appointmentId}`, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public cancelAppointment(appointment: Appointment): Observable<Appointment[]>{
    const reqBody = {type:appointment.type};
    return this.http.put<Appointment[]>(`${this.url}/appointments/${appointment._id}`, reqBody,{headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  /**
   * Used By Medical Admin to Call the api that books the appointment for a patient
   * */
  public bookAppointment(bookAppointmentPayload: BookAppointmentDTO): Observable<Appointment>{
    return this.http.post<Appointment>(this.url + '/bookAppointment', bookAppointmentPayload, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public getAccounts(): Observable<any>{
    return this.http.get<any>(this.url + '/getAllAccounts', {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public updateAccount(id, payload): Observable<any>{
    return this.http.put<any>(this.url + '/updateAccount/' + id, payload, {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
