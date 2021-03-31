import {Injectable} from '@angular/core';
import {Patient} from '../../models/patient.model';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../../models/appointment.model';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';

@Injectable({
  providedIn: 'root'
})

export class PatientService extends Service{
  mockPatient: Patient = {
    _id: '',
    account: null,
    appointments: [],
    healthCardNo: '123456-7890',
  }

  constructor(private http: HttpClient) {
    super();
  }

  public getPatient(): Observable<Patient>{
    this.http.get(this.url, {headers: this.httpHeader} )
    return of(this.mockPatient);
  }

  public getPatientAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url + '/getAllAppointmentsByPatientId/6060df3ac0edd45cd49d2f5a', {headers: this.httpHeader})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }


}
