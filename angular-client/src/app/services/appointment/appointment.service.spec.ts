import {async, inject, TestBed} from '@angular/core/testing';

import { AppointmentService } from './appointment.service';
import {PatientService} from "../patient/patient.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";
import {AppointmentType} from "../../models/enums/appointment.enum";

describe('AppointmentService', () => {
  let appointmentService: AppointmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppointmentService
      ],
    });

    appointmentService = TestBed.inject(AppointmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(appointmentService).toBeTruthy();
  });

  it(`could request appointment`, async(inject([HttpTestingController, AppointmentService],
    (httpClient: HttpTestingController, appointService: AppointmentService) => {

      appointService.requestAppointment({
        reason: 'Unit test appointment',
        preferredDate: '',
        preferredTime: '',
        vaccine: '',
        vaccineDose: '',
        type: AppointmentType.REQUESTED,
        clinicId: '',
        patientId: '',
      })
        .subscribe((result: any) => {
          expect(result._id).toBe('');
        });

      // @ts-ignore
      const req = httpMock.expectOne(environment.apiUrl + '/requestAppointment');
      expect(req.request.method).toBe('POST');

      req.flush(
        {
          _id: '',
          reason: 'Unit test appointment',
          preferredDate: '',
          preferredTime: '',
          vaccine: '',
          vaccineDose: '',
          type: AppointmentType.REQUESTED,
          clinicId: '',
          patientId: '',
        });
      httpMock.verify();

    })));
});
