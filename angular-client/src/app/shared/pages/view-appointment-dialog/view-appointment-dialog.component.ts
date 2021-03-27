import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment-dialog.component.html',
  styleUrls: ['./view-appointment-dialog.component.scss']
})
export class ViewAppointmentDialogComponent implements OnInit {
  displayedData = [
    {
      title: 'Patient',
      data: 'June Elder'
    },
    {
      title: 'Age',
      data: '25'
    },
    {
      title: 'Vaccine',
      data: 'Pfizer'
    },
    {
      title: 'When',
      data: '2:05 PM, Monday, March 8, 2021'
    },
    {
      title: 'Contact',
      data: '(416)555-2525'
    },
    {
      title: 'Vaccine Dose',
      data: '#1'
    },
    {
      title: 'Medical Condition',
      data: '175 cm/300 lb'
    },
  ];

  buttons = [
    {
      label: 'Check-in Appointment',
      action: ''
    },
    {
      label: 'View Vaccine History',
      action: ''
    },
    {
      label: 'Add Comments',
      action: ''
    },
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public data: ViewAppointmentDialogComponent) {
    /*if (data){
      Object.keys(data).forEach(obj => {
        this.displayedData.push({
          title: obj,
          data: data[obj]
        })
      });
    }*/
  }

  ngOnInit(): void {

  }

}
