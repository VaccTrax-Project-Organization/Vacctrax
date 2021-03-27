import { TestBed } from '@angular/core/testing';

import { VaccinesService } from './vaccines.service';

describe('VaccinesService', () => {
  let service: VaccinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
