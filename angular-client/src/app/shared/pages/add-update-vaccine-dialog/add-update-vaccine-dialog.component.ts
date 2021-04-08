import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-vaccine-dialog',
  templateUrl: './add-update-vaccine-dialog.component.html',
  styleUrls: ['./add-update-vaccine-dialog.component.scss']
})
export class AddUpdateVaccineDialogComponent implements OnInit {

  public addUpdateVaccineForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.createaddUpdateVaccineForm();

  }

  public createaddUpdateVaccineForm(): void {
    this.addUpdateVaccineForm = this.formBuilder.group({ 
      vaccineName: [this.data.vaccine?.name || '', Validators.required],
      manufacturer: [this.data.vaccine?.manufacturer || '', Validators.required],
      shelfLife: [this.data.vaccine?.shelfLife || '', Validators.required],
      approvedProvinces: [this.data.vaccine?.approvedProvinces || '', Validators.required],
    });
  }


}
