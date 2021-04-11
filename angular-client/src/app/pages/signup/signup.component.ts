import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.createSignupForm();
  }

  createSignupForm(): FormGroup{
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      gender:['', Validators.required],
      dob:['', Validators.required],
      email:['', Validators.required],
      streetLine1:['', Validators.required],
      streetLine2:[''],
      postalCode:['', Validators.required],
      city:['', Validators.required],
      phone:['', Validators.required],
      healthCard:['', Validators.required],
      preferredNotification:['', Validators.required]
    })
  }
}
