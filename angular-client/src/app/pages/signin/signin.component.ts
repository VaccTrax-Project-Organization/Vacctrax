import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NavigationExtras, Router } from '@angular/router';
import { Province } from 'src/app/models/enums/province.enum';
import { PatientService } from 'src/app/services/patient/patient.service';
import { SubSink } from 'subsink';

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

  createSignupForm(): FormGroup{
    // for the commented out lines, if the backend adds them, uncomment them.
    return this.formBuilder.group({

      email:['', Validators.required],
      password:['', Validators.required],

    })
  }

  public submitSignIn(): void {
    console.log("this.signInForm", this.signInForm.value);

    /* if(this.signInForm.valid) {
    console.log("this.signInForm", this.signInForm.value);
      this.subSink.add(this.patientService.signInPatient(this.signInForm.value).subscribe(res => {
        console.log("res", res);
        const navigationExtras: NavigationExtras = {
          state: {
            email: this.signInForm.value.email
          }
        };

        this.router.navigate(['/checkEmail'], navigationExtras);
      }, err => {
        alert(err.error.message);
      }));
    } */
  }
}
