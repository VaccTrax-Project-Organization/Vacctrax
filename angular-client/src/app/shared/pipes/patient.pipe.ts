import { Pipe, PipeTransform } from '@angular/core';
import {Patient} from '../../models/patient.model';
import {Account} from '../../models/account.class';

@Pipe({
  name: 'patientfullname'
})

export class PatientFullNamePipe implements PipeTransform {
  transform(account: Account): string {
    if (typeof(account) !== 'string' && account){
      return `${account?.firstName} ${account.lastName}`;
    }
  }
}
