import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CheckInComponent } from 'src/app/pages/check-in/check-in.component';
import {Appointment} from '../../../../models/appointment.model';



@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment-dialog.component.html',
  styleUrls: ['./view-appointment-dialog.component.scss']
})

export class ViewAppointmentDialogComponent implements OnInit {
  public displayedData: any[];
  public buttons: any[];
  public readonly bookedAppointmentLabels = ['patient', 'vaccine', 'when', 'contact', 'vaccineDose', 'medicalCondition', 'healthCard', 'healthPractitioner'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Appointment,private dialog: MatDialog) {
    this.displayedData = [];
  }

  ngOnInit(): void {

  }

  camelToSentence(text: string){
    const result = text.replace( /([A-Z])/g, ' $1' );
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  

  checkIn(){
    this.dialog.open(CheckInComponent,
       {panelClass: 'dialog-panel-class',
    width: '650px',
    height: 'auto',
    disableClose: true,
    autoFocus: false,
    restoreFocus: false,
   data: this.data});
  }
}
