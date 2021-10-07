import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';
import {Patient} from '../../../models/patient.model';
import {SubSink} from 'subsink';
import {PatientService} from '../../../services/patient/patient.service';
import {VaccinesService} from '../../../services/vaccines/vaccines.service';
import {AppointmentService} from "../../../services/appointment/appointment.service";

@Component({
  selector: 'app-vaccine-history',
  templateUrl: './vaccine-history.component.html',
  styleUrls: ['./vaccine-history.component.scss']
})
export class VaccineHistoryComponent implements OnInit, OnDestroy {

  @Input() role: Role;
  patient: Patient;
  subSink: SubSink;
  public dataSource =[];

  constructor(private appointmentService: AppointmentService,
              private patientService: PatientService,
              private vaccineService: VaccinesService) {
    this.subSink = new SubSink();
    this.role = Role.HEALTH_PRACTITIONER;
    this.subSink.add(patientService.getPatient().subscribe(res => {
      this.patient = res;
    }));

    this.subSink.add(vaccineService.getVaccines().subscribe(res => {
      console.log(res);
    }));

    this.subSink.add(appointmentService.getAppointmentsByPatient().subscribe(res => {
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
