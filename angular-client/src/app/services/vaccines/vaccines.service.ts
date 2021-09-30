import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Service} from '../service.class';
import {Vaccine} from '../../models/vaccine.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VaccinesService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  public getVaccines(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.url}/vaccines`, {headers: this.httpHeader, withCredentials: true})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
  public removeVaccine(vaccineId: string): Observable<Vaccine[]> {
    return this.http.delete<Vaccine[]>(`${this.url}/vaccines/${vaccineId}`, {headers: this.httpHeader, withCredentials: true})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
  public updateVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.put<Vaccine>(`${this.url}/vaccines/${vaccine._id}`, vaccine, {headers: this.httpHeader, withCredentials: true})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  public addVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(`${this.url}/addVaccine`, vaccine, {headers: this.httpHeader, withCredentials: true})
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
} 