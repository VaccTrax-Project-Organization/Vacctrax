import { Injectable } from '@angular/core';
import {Address} from '../../models/address';
import {Patient} from '../../models/patient';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  url = environment.apiUrl;
  httpHeader = new HttpHeaders({'Content-Type': 'application/JSON'});

  mockPatient: Patient = {
    accountId: '1232',
    address: new Address(),
    appointments: [],
    email: 'email@gmail.com',
    firstName: 'June',
    lastName: 'Elder',
    healthCard: '123456-7890',
    patientId: '',
    phone: '',
  }

  constructor(private http: HttpClient) {
  }

  public getPatient(): Observable<Patient>{
    this.http.get(this.url, {headers: this.httpHeader} )
    return of(this.mockPatient);
  }
}
