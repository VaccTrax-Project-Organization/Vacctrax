import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-patient-details',
  templateUrl: './edit-patient-details.component.html',
  styleUrls: ['./edit-patient-details.component.scss']
})
export class EditPatientDetailsComponent implements OnInit {

  public editPatientDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createEditPatientDetailsForm();
  }

  /**
   * function to create edit patient form controls with initial values
   */
  private createEditPatientDetailsForm(): void {
    this.editPatientDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      healthCard: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  /**
   * function to save the patient details on form submit
   */
  public onSubmit() {
    if (this.editPatientDetailsForm.valid) {
      console.log('Form Valid', this.editPatientDetailsForm.value);
    }
  }

}
