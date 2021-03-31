import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/enums/role.enum';

@Component({
  selector: 'app-patient-container',
  templateUrl: './patient-container.component.html',
  styleUrls: ['./patient-container.component.scss']
})
export class PatientContainerComponent implements OnInit {
  public role = Role;
  constructor() { }

  ngOnInit() {
  }

}
