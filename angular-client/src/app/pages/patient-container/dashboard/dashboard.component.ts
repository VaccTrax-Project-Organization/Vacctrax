import {Component, OnDestroy, OnInit} from '@angular/core';
import {Role} from 'src/app/models/enums/role.enum';
import {Patient} from '../../../models/patient.model';
import {PatientService} from '../../../services/patient/patient.service';
import {SubSink} from 'subsink';
import {VaccinesService} from '../../../services/vaccines/vaccines.service';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../../models/appointment.model';
import {AppointmentService} from '../../../services/appointment/appointment.service';
import {getUserDetails} from '../../../shared/Functions/getUserDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  role: Role;
  patient: Patient;
  subSink: SubSink;
  public dataSource: MatTableDataSource<Appointment>;

  constructor(private appointmentService: AppointmentService, private patientService: PatientService, private vaccineService: VaccinesService) {
    this.subSink = new SubSink();
    this.role = getUserDetails()?.type;
    if (!this.role){
      this.role = Role.PATIENT;
    }

    this.dataSource = new MatTableDataSource<Appointment>();

    this.subSink.add(patientService.getPatient().subscribe(res => {
      this.patient = res;
    }));

    this.subSink.add(vaccineService.getVaccines().subscribe(res => {
      console.log(res);
    }));

    this.getTableDataSource();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  public getTableDataSource(): void {
    const keys = getUserDetails();
    this.subSink.add(this.appointmentService.getAppointmentsByPatient(keys?.userId).subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Appointment>(res);
      console.log(this.dataSource);
    }, error => {
      console.log(error);
    }));
  }
}
