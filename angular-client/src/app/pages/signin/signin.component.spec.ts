/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from 'src/app/services/patient/patient.service';
import { SigninComponent } from './signin.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialAngularModule} from '../../material-angular.module';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {of} from 'rxjs';
import * as http from "http";

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  // tslint:disable-next-line:prefer-const
  let patientService: any;
  const formBuilder: FormBuilder = new FormBuilder();
  const mockPatientService = {
    signIn: () => of(null)
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialAngularModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: PatientService, useValue: mockPatientService }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    patientService = jasmine.createSpyObj(['signIn']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create sign in form group', () => {
    component.createSignupForm();
  });

  it('can sign in', () => {
    component.signInForm.controls.email.setValue('localvac@yopmail.com');
    component.signInForm.controls.password.setValue('Tester123!');
    component.submitSignIn();
    spyOn(component['patientService'], 'signIn');
    // expect(component.['patientService'].signIn).toHaveBeenCalled();
  });
});
