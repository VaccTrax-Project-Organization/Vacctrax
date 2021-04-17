import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';
import {AppointmentService} from '../../../services/appointment/appointment.service';
import {MatTableDataSource} from '@angular/material/table';
import {Appointment} from '../../../models/appointment.model';
import {getUserDetails} from '../../../shared/Functions/getUserDetails';

@Component({
  selector: 'app-government-dashboard',
  templateUrl: './government-dashboard.component.html',
  styleUrls: ['./government-dashboard.component.scss']
})
export class GovernmentDashboardComponent implements OnInit {
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
