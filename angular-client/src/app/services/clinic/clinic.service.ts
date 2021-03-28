import {Injectable} from '@angular/core';
import {Service} from '../service.class';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Clinic} from '../../models/clinic.model';

@Injectable({
  providedIn: 'root'
})

export class ClinicService extends Service{

  constructor(private http: HttpClient) {
    super();
  }

  public getClinics(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.url}/clinics`, {headers: this.httpHeader, withCredentials: true})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
