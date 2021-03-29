import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-decline-requested-appointment-dialog',
  templateUrl: './decline-requested-appointment-dialog.component.html',
  styleUrls: ['./decline-requested-appointment-dialog.component.scss']
})
export class DeclineRequestedAppointmentDialogComponent implements OnInit {

  note = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.note.value);
    // Put the api request to decline appointment here
  }

}
