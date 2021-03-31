import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Appointment} from '../../../models/appointment.model';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment-dialog.component.html',
  styleUrls: ['./view-appointment-dialog.component.scss']
})

export class ViewAppointmentDialogComponent implements OnInit {
  public displayedData: any[];
  public buttons: any[];
  public readonly bookedAppointmentLabels = ['patient', 'vaccine', 'when', 'contact', 'vaccineDose', 'medicalCondition', 'healthCard', 'healthPractitioner'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Appointment) {
    this.displayedData = [];
  }

  ngOnInit(): void {

  }

  camelToSentence(text: string){
    const result = text.replace( /([A-Z])/g, ' $1' );
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}
