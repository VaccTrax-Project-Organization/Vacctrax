import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/enums/role.enum';
import {Patient} from '../../../models/patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role: Role;
  patient: Patient;

  constructor() {
    this.role = Role.PATIENT;
  }

  ngOnInit(): void {
  }
}
