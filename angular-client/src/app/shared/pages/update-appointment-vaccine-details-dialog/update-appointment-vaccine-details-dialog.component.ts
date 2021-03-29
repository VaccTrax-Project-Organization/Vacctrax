import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-update-appointment-vaccine-details-dialog',
  templateUrl: './update-appointment-vaccine-details-dialog.component.html',
  styleUrls: ['./update-appointment-vaccine-details-dialog.component.scss']
})
export class UpdateAppointmentVaccineDetailsDialogComponent implements OnInit,OnDestroy {
  private subSink: SubSink;
  note = new FormControl();
  constructor(@Inject(MAT_DIALOG_DATA) public data: UpdateAppointmentVaccineDetailsDialogComponent, public dialog: MatDialog) {
    this.subSink = new SubSink();
  }

  ngOnInit(): void {
  }
  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
  save() {
    console.log(this.note.value);
    // Put the api request to decline appointment here
  }

}
