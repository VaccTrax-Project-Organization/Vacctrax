import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/enums/role.enum';

@Component({
  selector: 'app-government-container',
  templateUrl: './government-container.component.html',
  styleUrls: ['./government-container.component.scss']
})
export class GovernmentContainerComponent implements OnInit {
  public role = Role;
  constructor() { }

  ngOnInit(): void {
  }

}
