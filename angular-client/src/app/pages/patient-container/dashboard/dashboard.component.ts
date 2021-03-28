import {Component, OnDestroy, OnInit} from '@angular/core';
import { Role } from 'src/app/models/enums/role.enum';
import {Patient} from '../../../models/patient';
import {Address} from '../../../models/address';
import {PatientService} from '../../../services/patient/patient.service';
import {SubSink} from 'subsink';
import {VaccinesService} from '../../../services/vaccines/vaccines.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  role: Role;
  patient: Patient;
  subSink: SubSink;
  public dataSource =[];

  constructor(private patientService: PatientService, private vaccineService: VaccinesService) {
    this.subSink = new SubSink();
    this.role = Role.PATIENT;
    this.subSink.add(patientService.getPatient().subscribe(res => {
      this.patient = res;
    }));

    this.subSink.add(vaccineService.getVaccines().subscribe(res => {
      console.log(res);
    }));

    this.subSink.add(patientService.getPatientAppointments().subscribe(res => {
      console.log(res);
      this.dataSource = res;
    },error => {
      console.log(error);
    }));

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
