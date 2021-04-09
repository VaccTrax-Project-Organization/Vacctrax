import { PatientFullNamePipe } from './patient.pipe';

describe('PatientPipe', () => {
  it('create an instance', () => {
    const pipe = new PatientFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
