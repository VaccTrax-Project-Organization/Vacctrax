import { Pipe, PipeTransform } from '@angular/core';
import {Patient} from '../../models/patient.model';
import {Account} from '../../models/account.class';

@Pipe({
  name: 'patientfullname'
})

export class PatientFullNamePipe implements PipeTransform {
  transform(patient: Patient): string {
    if (typeof(patient?.account) !== 'string'){
      return `${patient.account?.firstName} ${patient.account?.lastName}`;
    }
  }
}
