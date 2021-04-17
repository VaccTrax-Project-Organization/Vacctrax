import {Injectable} from '@angular/core';
import {Patient} from '../../models/patient.model';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';
import {PatientList} from '../../shared/Models/patientList';

@Injectable({
  providedIn: 'root'
})

export class PatientService extends Service {
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

  public signIn(signInData: any): Observable<any> {
    return this.http.post<any>(`${this.url}/signIn`, signInData ).pipe(catchError(err => throwError(err)));
  }

  public signUpPatient(signUpData: any): Observable<any> {
    return this.http.post<any>(`${this.url}/signUp`, signUpData).pipe(catchError(err => throwError(err)));
  }

  public setPasswordVerifyToken(token: string): Observable<any> {
    return this.http.post<any>(`${this.url}/setPasswordVerifyToken`, { token }).pipe(catchError(err => throwError(err)));
  }

  public setPassword(password: string, confirmPassword: string, authToken: string): Observable<any> {
    const headers = this.httpHeader.append('Authorization', `Bearer ${authToken}`);
    return this.http.post<any>(`${this.url}/setPassword`, { password, confirmPassword }, {headers}).pipe(catchError(err => throwError(err)));
  }
}
