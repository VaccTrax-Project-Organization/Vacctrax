import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Appointment} from '../../../models/appointment.model';
import {VaccinesService} from '../../../services/vaccines/vaccines.service';
import {Vaccine} from "../../../models/vaccine.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modify-appointment-details-dialog',
  templateUrl: './modify-appointment-details-dialog.component.html',
  styleUrls: ['./modify-appointment-details-dialog.component.scss']
})
export class ModifyAppointmentDetailsDialogComponent implements OnInit {
  public modifyApptForm: FormGroup;
  public currentDate: Date;
  public vaccines$: Observable<Vaccine[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Appointment,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService) {
  }

  public ngOnInit(): void {
    this.createModifyApptForm();
    this.currentDate = new Date();
    this.vaccines$ = this.vaccineService.getVaccines();
  }

  private createModifyApptForm(): void {
    this.modifyApptForm = this.formBuilder.group({
      vaccine: ['', Validators.required],
      vaccineDose: ['', Validators.required],
    });
  }
}
