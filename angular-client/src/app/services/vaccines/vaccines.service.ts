import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {
  url = environment.apiUrl;
  httpHeader = new HttpHeaders({'Content-Type': 'application/JSON'});

  constructor(private http: HttpClient) { }

  public getVaccines(): Observable<any> {
    return this.http.get<any>(`${this.url}/vaccines`, {headers: this.httpHeader, withCredentials: true})
  }
}
