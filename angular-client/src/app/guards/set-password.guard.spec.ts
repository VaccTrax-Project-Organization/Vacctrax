import { TestBed } from '@angular/core/testing';

import { SetPasswordGuard } from './set-password.guard';

describe('SetPasswordGuard', () => {
  let guard: SetPasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SetPasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
