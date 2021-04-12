import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  checkInForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkInForm = this.createCheckInForm();
  }

  createCheckInForm(): FormGroup{
    return this.formBuilder.group({
      age: [''],
      frontline: [false],
      pregnant: [false],
      hospitalWorker:[false],
      indigenous:[false],
      longTermCare:[false],
    })
  }

  checkInPatient($event) {

  }
}
