import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {AppointmentService} from '../../../services/appointment/appointment.service';

@Component({
  selector: 'app-update-appointment-vaccine-details-dialog',
  templateUrl: './update-appointment-vaccine-details-dialog.component.html',
  styleUrls: ['./update-appointment-vaccine-details-dialog.component.scss']
})
export class UpdateAppointmentVaccineDetailsDialogComponent implements OnInit, OnDestroy {
  private subSink: SubSink;
  appointmentDetails: any;
  dose = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: UpdateAppointmentVaccineDetailsDialogComponent, private dialogRef: MatDialogRef<UpdateAppointmentVaccineDetailsDialogComponent>, private appointmentService: AppointmentService) {
    this.subSink = new SubSink();
    if (data) {
      this.appointmentDetails = data;
    }
  }

  ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  save() {
    console.log('-> this.dose.value', this.dose.value);
    console.log('-> this.type.value', this.type.value);
    this.appointmentDetails.vaccineDose = Number(this.dose.value);
    this.appointmentDetails.vaccine = this.type.value;
    this.subSink.add(this.appointmentService.updateAppointmentVaccine(this.appointmentDetails).subscribe(res => {
      console.log('-> response', res);
      this.dialogRef.close(true);
    }));
  }

}
