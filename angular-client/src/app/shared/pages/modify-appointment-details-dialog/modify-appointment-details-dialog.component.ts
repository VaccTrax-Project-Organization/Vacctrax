import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Appointment} from '../../../models/appointment.model';
import {VaccinesService} from '../../../services/vaccines/vaccines.service';
import {Vaccine} from '../../../models/vaccine.model';
import {Observable} from 'rxjs';
import {HealthPractitionerService} from '../../../services/health-practitioner/health-practitioner.service';
import {HealthPractitioner} from '../../../models/healthPractitioner.model';

@Component({
  selector: 'app-modify-appointment-details-dialog',
  templateUrl: './modify-appointment-details-dialog.component.html',
  styleUrls: ['./modify-appointment-details-dialog.component.scss']
})
export class ModifyAppointmentDetailsDialogComponent implements OnInit {
  public modifyApptForm: FormGroup;
  public currentDate: Date;
  public vaccines$: Observable<Vaccine[]>;
  public healthPractitioners$: Observable<HealthPractitioner[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Appointment,
              private dialogRef: MatDialogRef<ModifyAppointmentDetailsDialogComponent>,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService,
              private healthPractitionerService: HealthPractitionerService) {
  }

  public ngOnInit(): void {
    this.createModifyApptForm();
    this.currentDate = new Date();
    this.vaccines$ = this.vaccineService.getVaccines();
    this.healthPractitioners$ = this.healthPractitionerService.getHealthPractitionersByClinicId(this.data.clinic._id);
  }

  private createModifyApptForm(): void {
    this.modifyApptForm = this.formBuilder.group({
      vaccine: ['', Validators.required],
      vaccineDose: ['', Validators.required],
      healthPractitioner: [this.data.healthPractitioner._id, Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
    });
  }

  // add submit logic
  public submitUpdatedAppointment(): void {
    console.log('submit reached');

    if (this.modifyApptForm.valid) {
      this.dialogRef.close(true);
    }
  }
}
