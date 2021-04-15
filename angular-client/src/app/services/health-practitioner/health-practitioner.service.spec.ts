import { TestBed } from '@angular/core/testing';

import { HealthPractitionerService } from './health-practitioner.service';

describe('HealthPractitionerService', () => {
  let service: HealthPractitionerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthPractitionerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
