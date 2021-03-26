import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/enums/role.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get Role() {
    return Role;
  }
}
