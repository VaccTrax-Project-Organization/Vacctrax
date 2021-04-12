import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-vaccine-dialog',
  templateUrl: './add-update-vaccine-dialog.component.html',
  styleUrls: ['./add-update-vaccine-dialog.component.scss']
})
export class AddUpdateVaccineDialogComponent implements OnInit {

  public addUpdateVaccineForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddUpdateVaccineDialogComponent>) { }

  public ngOnInit(): void {
    this.createAddUpdateVaccineForm();

  }

  public createAddUpdateVaccineForm(): void {
    this.addUpdateVaccineForm = this.formBuilder.group({ 
      name: [this.data.vaccine?.name || '', Validators.required],
      manufacturer: [this.data.vaccine?.manufacturer || '', Validators.required],
      shelfLife: [this.data.vaccine?.shelfLife || '', Validators.required],
      approvedProvinces: [this.data.vaccine?.approvedProvinces || '', Validators.required],
    });
  }

  public saveAndCloseDialog(): void {
    this.addUpdateVaccineForm.markAllAsTouched();
    if (this.addUpdateVaccineForm.valid) {
      this.dialogRef.close(this.addUpdateVaccineForm.value);
    }
  }
}
