import { Injectable } from '@angular/core';
import {Service} from '../service.class';
import {AppointmentRequest} from "../../models/appointment-request.model";
import {Observable, throwError} from "rxjs";
import {Appointment} from "../../models/appointment.model";
import {catchError} from "rxjs/operators";
import {Vaccine} from "../../models/vaccine.model";
import {HttpClient} from "@angular/common/http";
import {Clinic} from "../../models/clinic.model";

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
