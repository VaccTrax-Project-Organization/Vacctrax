import {async, inject, TestBed} from '@angular/core/testing';
import { AppointmentService } from './appointment.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {AppointmentType} from '../../models/enums/appointment.enum';
import {Vaccine} from '../../models/vaccine.model';
import {Clinic} from '../../models/clinic.model';
import {Patient} from '../../models/patient.model';
import {HealthPractitioner} from '../../models/healthPractitioner.model';

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

  /** checking if the component is created */
  it('should be created', () => {
    expect(appointmentService).toBeTruthy();
  });

  /** Using hardcoded values to send request appointment api request and check if appointment created */
  it(`could request appointment`, async(inject([HttpTestingController, AppointmentService],
    (httpClient: HttpTestingController, appointService: AppointmentService) => {

      appointService.requestAppointment({
        reason: 'Unit test appointment',
        preferredDate: '2021-03-28T20:48:45.535+00:00',
        preferredTime: '2021-03-28T12:30:00.535+00:00',
        vaccine: '6060e7d900130baf8c5b6a70',
        vaccineDose: '2nd',
        type: AppointmentType.REQUESTED,
        clinicId: '6060e0d489d72d6c899a6284',
        patientId: '6060df17c0edd45cd49d2f57',
      })
        .subscribe((result: any) => {
          expect(result._id).toBe('6060edfa00b639ea04d96fe2');
        });

      // @ts-ignore
      const req = httpMock.expectOne(environment.apiUrl + '/requestAppointment');
      expect(req.request.method).toBe('POST');

      req.flush(
        {
          _id: '6060edfa00b639ea04d96fe2',
          reason: 'Unit test appointment',
          preferredDate: '2021-03-28T20:48:45.535+00:00',
          preferredTime: '2021-03-28T12:30:00.535+00:00',
          vaccine: '6060e7d900130baf8c5b6a70',
          vaccineDose: '2nd',
          type: AppointmentType.REQUESTED,
          clinic: '6060e0d489d72d6c899a6284',
          patient: '6060df17c0edd45cd49d2f57',
        });
      httpMock.verify();

    })));

  /** Using hardcoded values to send cancel appointment api and check if appointment status changed to CANCELLED */
  it(`could cancel appointment`, async(inject([HttpTestingController, AppointmentService],
    (httpClient: HttpTestingController, appointService: AppointmentService) => {

      appointService.cancelAppointment({
        _id: '6060ee5300b639ea04d96fe2',
        reason: 'Unit test appointment',
        preferredDate: new Date('2021-03-28T20:48:45.535+00:00'),
        preferredTime: new Date('2021-03-28T12:30:00.535+00:00'),
        vaccine: new Vaccine('6060e7d900130baf8c5b6a70'),
        vaccineDose: '2nd',
        type: AppointmentType.REQUESTED,
        clinic: new Clinic('6060e0d489d72d6c899a6284'),
        patient: new Patient('6060df17c0edd45cd49d2f57'),
        startTime: new Date('2021-03-28T20:48:45.535+00:00'),
        endTime: new Date('2021-03-28T20:48:45.535+00:00'),
        healthPractitioner: new HealthPractitioner('6060e4a0e8efb27ed157ad1b')
      })
        .subscribe((result: any) => {
          expect(result.type).toBe(AppointmentType.CANCELLED);
        });

      // @ts-ignore
      const req = httpMock.expectOne(environment.apiUrl + '/appointments/' + '6060ee5300b639ea04d96fe2');
      expect(req.request.method).toBe('PUT');

      req.flush(
        {
          _id: '6060edfa00b639ea04d96fe2',
          reason: 'Unit test appointment',
          preferredDate: '2021-03-28T20:48:45.535+00:00',
          preferredTime: '2021-03-28T12:30:00.535+00:00',
          vaccine: '6060e7d900130baf8c5b6a70',
          vaccineDose: '2nd',
          type: AppointmentType.CANCELLED,
          clinic: '6060e0d489d72d6c899a6284',
          patient: '6060df17c0edd45cd49d2f57',
        });
      httpMock.verify();

    })));
});
