import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  displayedColumns: string[] = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
}

export interface PeriodicElement {
  patientName: string;
  appointmentDateTime: string;
  practitionerName: string;
  status: string;
  vaccine: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {patientName: 'Hydrogen', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
  {patientName: 'Hydrogen', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
  {patientName: 'Hydrogen', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
  {patientName: 'Hydrogen', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
];
