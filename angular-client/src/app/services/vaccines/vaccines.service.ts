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
}
