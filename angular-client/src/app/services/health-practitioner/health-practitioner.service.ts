import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Vaccine} from '../../models/vaccine.model';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';
import {HealthPractitioner} from '../../models/healthPractitioner.model';

@Injectable({
  providedIn: 'root'
})
export class HealthPractitionerService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  public getHealthPractitionersByClinicId(clinicId: string): Observable<HealthPractitioner[]> {
    return this.http.get<HealthPractitioner[]>(`${this.url}/getAllHealthPractitioners/${clinicId}`, {
      headers: this.httpHeader,
      withCredentials: true
    })
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
