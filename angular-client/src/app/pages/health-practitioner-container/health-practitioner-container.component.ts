import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/enums/role.enum';

@Component({
  selector: 'app-health-practitioner-container',
  templateUrl: './health-practitioner-container.component.html',
  styleUrls: ['./health-practitioner-container.component.scss']
})
export class HealthPractitionerContainerComponent implements OnInit {
  public role: typeof Role;
  constructor() { }

  ngOnInit(): void {
  }

}
