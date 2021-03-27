import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/enums/role.enum';
import {Patient} from '../../../models/patient';
import {Address} from "../../../models/address";

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
    this.patient = {
      accountId: '1232',
      address: new Address(),
      appointments: [],
      email: 'email@gmail.com',
      firstName: 'June',
      lastName: 'Elder',
      healthCard: '123456-7890',
      patientId: '',
      phone: '',
    }
  }

  ngOnInit(): void {
  }
}
