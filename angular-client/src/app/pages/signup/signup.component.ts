import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Province } from 'src/app/models/enums/province.enum';
import { PatientService } from 'src/app/services/patient/patient.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  private subSink: SubSink;
  public provincesEnum: Object;
  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private router: Router) {
                this.subSink = new SubSink();
                this.provincesEnum = Province;
  }

  ngOnInit(): void {
    this.signUpForm = this.createSignupForm();
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  /** create the sign up form to add validations and reference these controls in html */
  createSignupForm(): FormGroup{
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', Validators.required],
      streetLine1:['', Validators.required],
      streetLine2:[''],
      postalCode:['', Validators.required],
      city:['', Validators.required],
      phone:['', Validators.required],
      healthCardNo:['', Validators.required],
      province: ['', Validators.required]
    })
  }

  /** called when sign up form submitted and if the values are valid call the api for
  * user sign up*/
  public submitSignUp(): void {

    if(this.signUpForm.valid) {
      // calling the patient service sign up patient function to call the sign up api with the values user entered
      this.subSink.add(this.patientService.signUpPatient(this.signUpForm.value).subscribe(res => {

        // if the api call is successfully then navigate to email sent page
        const navigationExtras: NavigationExtras = {
          state: {
            email: this.signUpForm.value.email
          }
        };

        this.router.navigate(['/checkEmail'], navigationExtras);
      }, err => {
        // if error message received from server then show an alert to the user
        alert(err.error.message);
      }));
    }
  }
}
