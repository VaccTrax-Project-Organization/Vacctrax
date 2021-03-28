import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/enums/role.enum';

@Component({
  selector: 'app-medical-admin-container',
  templateUrl: './medical-admin-container.component.html',
  styleUrls: ['./medical-admin-container.component.scss']
})
export class MedicalAdminContainerComponent implements OnInit {
  public role: typeof Role;
  constructor() { }

  ngOnInit(): void {
  }

}
