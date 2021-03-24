import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  displayedColumns: string[] = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine', 'actions'];
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
  {patientName: 'June Elder', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
  {patientName: 'Bob Barker', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
  {patientName: 'Jonathan Joestar', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
  {patientName: 'John Henry', appointmentDateTime: 'January 1 2021 at 4:30 pm', practitionerName: 'Dr.Drake', status: 'Requested', vaccine: 'Pfizer'},
];
