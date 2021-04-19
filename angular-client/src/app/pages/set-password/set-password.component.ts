import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit, OnDestroy {

  private subSink: SubSink;
  public setPasswordForm: FormGroup;
  private authToken: string;
  constructor(private patientService: PatientService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.subSink = new SubSink();
    this.authToken = this.activatedRoute.snapshot.paramMap.get('token');
  }

  public ngOnInit(): void {
    this.createSetPasswordForm();
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
  /**
   * createSetPasswordForm will generate the password form view for user to choose a password * */
  public createSetPasswordForm(): void {
    this.setPasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([ Validators.required, Validators.minLength(7)])],
      confirmPassword: ['', Validators.compose([ Validators.required, Validators.minLength(7)])],
    });
  }
  /**
   * submitSetPasswordForm  takes password input. returns error if login fails * */

  public submitSetPasswordForm(): void {
    if (this.setPasswordForm.valid) {
      const { password, confirmPassword} = this.setPasswordForm.value;
      this.subSink.add(this.patientService.setPassword(password, confirmPassword, this.authToken).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/login');
      }, err => {
        console.log(err);
        alert(err.error.message);
      }));
    }
  }
}
