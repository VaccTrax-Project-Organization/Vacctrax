import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';

@Component({
  selector: 'app-health-practitioner-dashboard',
  templateUrl: './health-practitioner-dashboard.component.html',
  styleUrls: ['./health-practitioner-dashboard.component.scss']
})
export class HealthPractitionerDashboardComponent implements OnInit {
  public role: Role;

  constructor() {
  }

  public ngOnInit(): void {
    this.role = Role.HEALTH_PRACTITIONER;
  }

}
