import { Pipe, PipeTransform } from '@angular/core';
import {Patient} from '../../models/patient';

@Pipe({
  name: 'patientfullname'
})

export class PatientPipe implements PipeTransform {
  transform(patient: Patient): string {
    return `${patient.firstName} ${patient.lastName}`;
  }
}
