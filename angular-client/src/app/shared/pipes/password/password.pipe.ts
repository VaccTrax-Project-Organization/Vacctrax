import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'password',
  pure: false
})
export class PasswordPipe implements PipeTransform {

  public transform(passwordField: AbstractControl, passwordType: string = 'Password'): string {
    if(passwordField.hasError('required')) {
      return `${passwordType} is required`;
    } else if (passwordField.hasError('minlength')) {
      return `${passwordType} must be at least 7 characters.`;
    } else {
      return '';
    }
  }

}
