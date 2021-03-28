import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modify-appointment-details',
  templateUrl: './modify-appointment-details.component.html',
  styleUrls: ['./modify-appointment-details.component.scss']
})
export class ModifyAppointmentDetailsComponent implements OnInit {

  public modifyApptForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.createModifyApptForm();
  }

  // create the modify appt form fields to bind to from the .html
  private createModifyApptForm(): void {
    this.modifyApptForm = this.formBuilder.group({
      healthPractitioner: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      vaccineType: ['', Validators.required],
      vaccineDose: ['', Validators.required],
    });
  }

}
