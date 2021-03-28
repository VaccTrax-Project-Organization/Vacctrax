import {Component, OnDestroy, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';
import {MatTableDataSource} from '@angular/material/table';
import {PatientService} from '../../../services/patient/patient.service';
import {SubSink} from 'subsink';
import {Appointment} from '../../../models/appointment.model';

@Component({
  selector: 'app-medical-admin-dashboard',
  templateUrl: './medical-admin-dashboard.component.html',
  styleUrls: ['./medical-admin-dashboard.component.scss']
})
export class MedicalAdminDashboardComponent implements OnInit,OnDestroy {
  public role = Role.MEDICAL_ADMIN;
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  constructor(private patientService: PatientService) {
    this.subSink = new SubSink();
    this.dataSource = new MatTableDataSource<Appointment>();

    this.subSink.add(patientService.getPatientAppointments().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Appointment>(res);
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
