/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateAppointmentDialogComponent } from './create-appointment-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialAngularModule} from '../../../../material-angular.module';
import {SharedModule} from '../../../shared.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

describe('CreateAppointmentDialogComponent', () => {
  let component: CreateAppointmentDialogComponent;
  let fixture: ComponentFixture<CreateAppointmentDialogComponent>;

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
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
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
