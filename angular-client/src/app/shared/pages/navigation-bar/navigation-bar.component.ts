import {Component, Input, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() public roleInput: Role;

  constructor() {

  }

  ngOnInit() {
    console.log(this.roleInput);
  }

}
