import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Appointment} from '../../../../models/appointment.model';
import {VaccinesService} from '../../../../services/vaccines/vaccines.service';
import {Vaccine} from '../../../../models/vaccine.model';
import {Observable} from 'rxjs';
import {HealthPractitionerService} from '../../../../services/health-practitioner/health-practitioner.service';
import {HealthPractitioner} from '../../../../models/healthPractitioner.model';
import {AppointmentService} from '../../../../services/appointment/appointment.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modify-appointment-details-dialog',
  templateUrl: './modify-appointment-details-dialog.component.html',
  styleUrls: ['./modify-appointment-details-dialog.component.scss']
})
export class ModifyAppointmentDetailsDialogComponent implements OnInit, OnDestroy {
  public modifyApptForm: FormGroup;
  public currentDate: Date;
  public vaccines$: Observable<Vaccine[]>;
  public healthPractitioners$: Observable<HealthPractitioner[]>;
  public subSink: SubSink;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Appointment,
              private appointmentService: AppointmentService,
              private dialogRef: MatDialogRef<ModifyAppointmentDetailsDialogComponent>,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService,
              private healthPractitionerService: HealthPractitionerService) {
                this.subSink = new SubSink();
  }

  ngOnInit(): void {
    this.createModifyApptForm();
    this.currentDate = new Date();
    this.vaccines$ = this.vaccineService.getVaccines();
    this.healthPractitioners$ = this.healthPractitionerService.getHealthPractitionersByClinicId(this.data.clinic._id);
  }

  ngOnDestroy(): void{
    this.subSink.unsubscribe();
  }

  private createModifyApptForm(): void {
    // const test = new Date(this.data?.startTime).toISOString().match(/\d\d:\d\d/)[0];
    this.modifyApptForm = this.formBuilder.group({
      vaccine: [this.data?.vaccine?._id || '', Validators.required],
      vaccineDose: [this.data?.vaccineDose || '', Validators.required],
      healthPractitioner: [this.data?.healthPractitioner?._id, Validators.required],
      appointmentDate: [new Date(this.data?.startTime || this.data?.preferredDate) || '', Validators.required],
      // tslint:disable-next-line: max-line-length
      appointmentTime: [new Date(this.data?.startTime || this.data?.preferredTime).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
    });
  }

  public submitUpdatedAppointment(): void {
    console.log('submit reached');

    if (this.modifyApptForm.valid) {
      const {vaccine, vaccineDose, healthPractitioner, appointmentDate, appointmentTime} = this.modifyApptForm.getRawValue();
      const startTime = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);

      const modifiedAppointment = {_id: this.data._id, vaccine, vaccineDose, healthPractitioner, startTime};

      this.subSink.add(this.appointmentService.updateAppointment(modifiedAppointment).subscribe(res => {
        console.log(res);
      }));

      this.dialogRef.close(true);
    }
  }
}
