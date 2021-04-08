import {Injectable} from '@angular/core';
import {Patient} from '../../models/patient.model';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../../models/appointment.model';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';
import {PatientList} from "../../shared/Models/patientList";

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

  public getAllPatients(): Observable<PatientList[]>{
    return this.http.get<PatientList[]>(this.url + '/patients', {headers: this.httpHeader} )
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
