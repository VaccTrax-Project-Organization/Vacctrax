import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';
import {AppointmentService} from '../../../services/appointment/appointment.service';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../../models/appointment.model';
import {getUserDetails} from '../../../shared/Functions/getUserDetails';

@Component({
  selector: 'app-health-practitioner-dashboard',
  templateUrl: './health-practitioner-dashboard.component.html',
  styleUrls: ['./health-practitioner-dashboard.component.scss']
})
export class HealthPractitionerDashboardComponent implements OnInit {
  public role: Role;
  public dataSource: MatTableDataSource<Appointment>;

  constructor(private appointmentService: AppointmentService) {
    this.role = getUserDetails().type;
    this.dataSource = new MatTableDataSource<Appointment>();
  }

  public ngOnInit(): void {
    this.appointmentService.getConfirmedAppointmentsByClinicId().subscribe(res => {
      this.dataSource = new MatTableDataSource<Appointment>(res);
    });
  }
}
