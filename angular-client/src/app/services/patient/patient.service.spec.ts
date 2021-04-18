// describe('PatientService', () => {
//   let service: PatientService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(PatientService);
//   });
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';
import { environment } from '../../../environments/environment';

describe('PatientService', () => {
  let patientService: PatientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PatientService
      ],
    });

    patientService = TestBed.inject(PatientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`should sign in`, async(inject([HttpTestingController, PatientService],
    // tslint:disable-next-line:no-shadowed-variable
    (httpClient: HttpTestingController, patientService: PatientService) => {

      patientService.signIn({email: 'localvac@yopmail.com', password: 'Tester123!'})
        .subscribe((result: any) => {
          expect(result.success).toBe(true);
        });

      // @ts-ignore
      const req = httpMock.expectOne(environment.apiUrl + '/signIn');
      expect(req.request.method).toBe('POST');

      req.flush(
      {
        message: 'Sign In Successfully',
        success: true,
        id: '6074aea6d983cd349463bffa',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzRhZWE2ZDk4M2NkMzQ5NDYzYmZmYSIsImVtYWlsIjoibG9jYWx2YWNAeW9wbWFpbC5jb20iLCJyb2xlIjoiUEFUSUVOVCIsImlhdCI6MTYxODY4MDM0MSwiZXhwIjoxNjE4Njk4MzQxfQ.5YTOezjGGMFnef0Vg9xGBN58f7pF8KGvyVeao6GqEFQ',
        email: 'localvac@yopmail.com',
        type: 'PATIENT',
        userId: '6074aea6d983cd349463bffb'
      });
      httpMock.verify();

    })));
});
