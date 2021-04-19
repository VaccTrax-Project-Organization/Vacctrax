import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Province} from 'src/app/models/enums/province.enum';
import {PatientService} from 'src/app/services/patient/patient.service';
import {SubSink} from 'subsink';
import {getUserDetails} from '../../shared/Functions/getUserDetails';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  private subSink: SubSink;
  public provincesEnum: Object;

  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private router: Router) {
    this.subSink = new SubSink();
    this.provincesEnum = Province;
  }

  ngOnInit(): void {
    this.signInForm = this.createSignupForm();
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
/**
 * Create sign up form will do the validation for email and password.
 * */
  createSignupForm(): FormGroup {
    // for the commented out lines, if the backend adds them, uncomment them.
    return this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  /**
   * Submit Sign In will submit the signin form data and route the user to the appropriate dashboard page
   * */
  public submitSignIn() {
    console.log('this.signInForm', this.signInForm.value);
    if (this.signInForm.valid) {
      console.log('this.signInForm', this.signInForm.value);
      this.subSink.add(this.patientService.signIn(this.signInForm.value).subscribe(res => {
        sessionStorage.setItem('signedInUser', JSON.stringify(res));
        switch (getUserDetails().type) {
          case 'PATIENT': {
            this.router.navigate(['/patient/dashboard']);
            break;
          }
          case 'MEDICAL_ADMIN': {
            this.router.navigate(['/medicalAdmin/dashboard']);
            break;
          }
          case 'HEALTH_PRACTITIONER': {
            this.router.navigate(['/healthPractitioner/dashboard']);
            break;
          }
          case 'GOVERNMENT': {
            this.router.navigate(['/government/dashboard']);
            break;
          }
          default: {
            this.router.navigate(['/']);
            break;
          }
        }
      }, error => {
        alert(error.error.message);
      }));
      // const navigationExtras: NavigationExtras = {
      //   state: {
      //     email: this.signInForm.value.email
      //   }
      // };
    }
  }
}
