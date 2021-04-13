import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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

  createSignupForm(): FormGroup{
    // for the commented out lines, if the backend adds them, uncomment them.
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      // middleName: [''],
      lastName: ['', Validators.required],
      // gender:['', Validators.required],
      // dob:[''],
      email:['', Validators.required],
      streetLine1:['', Validators.required],
      streetLine2:[''],
      postalCode:['', Validators.required],
      city:['', Validators.required],
      phone:['', Validators.required],
      healthCardNo:['', Validators.required],
      // preferredNotification:[''],
      province: ['', Validators.required]
    })
  }

  public submitSignUp(): void {
    console.log("this.signUpForm", this.signUpForm.value);

    if(this.signUpForm.valid) {
    console.log("this.signUpForm", this.signUpForm.value);
      this.subSink.add(this.patientService.signUpPatient(this.signUpForm.value).subscribe(res => {
        console.log("res", res);
        const navigationExtras: NavigationExtras = {
          state: {
            email: this.signUpForm.value.email
          }
        };

        this.router.navigate(['/checkEmail'], navigationExtras);
      }, err => {
        alert(err.error.message);
      }));
    }
  }
}
