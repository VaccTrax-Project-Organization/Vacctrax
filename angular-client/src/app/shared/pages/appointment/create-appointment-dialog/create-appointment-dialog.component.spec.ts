/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {CreateAppointmentDialogComponent, CreateAppointmentDialogModel} from './create-appointment-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialAngularModule} from '../../../../material-angular.module';
import {SharedModule} from '../../../shared.module';
import {RouterModule} from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {PatientService} from '../../../../services/patient/patient.service';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ModifyAppointmentDetailsDialogComponent} from "../modify-appointment-details-dialog/modify-appointment-details-dialog.component";

describe('CreateAppointmentDialogComponent', () => {
  let component: CreateAppointmentDialogComponent;
  let fixture: ComponentFixture<CreateAppointmentDialogComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let dialogData: MatDialogRef<CreateAppointmentDialogComponent>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppointmentDialogComponent ],
      imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialAngularModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        MatDialogModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: MAT_DIALOG_DATA, useValue: {
          panelClass: 'dialog-panel-class',
          width: '650px',
          height: 'auto',
          disableClose: true,
          autoFocus: false,
          restoreFocus: false,
          data: {role: 'PATIENT'}
        } },
        // tslint:disable-next-line:no-shadowed-variable
        { provide: MatDialogRef, useValue: {dialogData} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(CreateAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create appointment form', () => {
    component.createModifyApptForm();
    expect(component).toBeTruthy();
  });

  it('should create appointment by api', () => {
    component.createModifyApptForm();
    expect(component).toBeTruthy();
  });
});
