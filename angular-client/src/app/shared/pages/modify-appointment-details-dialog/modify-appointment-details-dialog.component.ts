import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Appointment} from '../../../models/appointment.model';
import {VaccinesService} from '../../../services/vaccines/vaccines.service';
import {Vaccine} from '../../../models/vaccine.model';
import {Observable} from 'rxjs';
import {HealthPractitionerService} from '../../../services/health-practitioner/health-practitioner.service';
import {HealthPractitioner} from '../../../models/healthPractitioner.model';
import {AppointmentService} from '../../../services/appointment/appointment.service';

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
              private appointmentService: AppointmentService,
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
    // const test = new Date(this.data?.startTime).toISOString().match(/\d\d:\d\d/)[0];
    this.modifyApptForm = this.formBuilder.group({
      vaccine: [this.data?.vaccine?._id || '', Validators.required],
      vaccineDose: [this.data?.vaccineDose || '', Validators.required],
      healthPractitioner: [this.data?.healthPractitioner._id, Validators.required],
      appointmentDate: [new Date(this.data?.startTime) || '', Validators.required],
      appointmentTime: [new Date(this.data?.startTime).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
    });
  }

  // add submit logic
  public submitUpdatedAppointment(): void {
    console.log('submit reached');

    if (this.modifyApptForm.valid) {
      const {vaccine, vaccineDose, healthPractitioner, appointmentDate, appointmentTime} = this.modifyApptForm.getRawValue();
      const startTime = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);

      const modifiedAppointment = {...this.data, vaccine, vaccineDose, healthPractitioner, startTime};

      this.appointmentService.updateAppointment(modifiedAppointment).subscribe(res => {
        console.log(res);
      });

      this.dialogRef.close(true);
    }
  }
}
