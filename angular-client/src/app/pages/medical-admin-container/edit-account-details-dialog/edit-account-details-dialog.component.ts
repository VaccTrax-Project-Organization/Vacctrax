import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {AppointmentService} from '../../../services/appointment/appointment.service';

@Component({
  selector: 'app-edit-account-details-dialog',
  templateUrl: './edit-account-details-dialog.component.html',
  styleUrls: ['./edit-account-details-dialog.component.scss']
})
export class EditAccountDetailsDialogComponent implements OnInit, OnDestroy {

  public modifyAccountForm: FormGroup;
  private subSink: SubSink;
  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private appointmentService: AppointmentService,
              private dialogRef: MatDialogRef<EditAccountDetailsDialogComponent>,) {
    this.subSink = new SubSink();
  }

  public ngOnInit(): void {
    this.createModifyAccountForm();
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  // create the modify appt form fields to bind to from the .html
  private createModifyAccountForm(): void {
    this.modifyAccountForm = this.formBuilder.group({
      firstName: [this.data?.firstName || '', Validators.required],
      lastName: [this.data?.lastName || '', Validators.required],
      email: [this.data?.email, Validators.required]
    });
    this.modifyAccountForm.controls.email.disable();
  }

  public submitUpdateAccount() {
    if (this.modifyAccountForm.valid) {
      const apiData = {firstName: this.modifyAccountForm.controls.firstName.value, lastName: this.modifyAccountForm.controls.lastName.value}
      this.subSink.add(this.appointmentService.updateAccount(this.data?._id, apiData).subscribe(res => {
        console.log('-> response', res);
        this.dialogRef.close(true);
      }, err => {
        console.log(err);
        this.dialogRef.close(false);
      }));
    }
  }

}
