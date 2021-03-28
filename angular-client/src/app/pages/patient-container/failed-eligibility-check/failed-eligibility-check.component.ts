import { Component, OnInit } from '@angular/core';
import {NavigationBehaviorOptions, Router} from '@angular/router';

@Component({
  selector: 'app-failed-eligibility-check',
  templateUrl: './failed-eligibility-check.component.html',
  styleUrls: ['./failed-eligibility-check.component.scss']
})
export class FailedEligibilityCheckComponent implements OnInit {
  public navigationBehaviorOptions: NavigationBehaviorOptions;
  public ineligible: any;


  constructor(private router: Router) {
    this.navigationBehaviorOptions = this.router.getCurrentNavigation().extras;
    console.log('navigationBehaviorOptions', this.navigationBehaviorOptions);
  }

  public ngOnInit(): void {
    this.ineligible = {
      USF: 'Under Seventy Five',
      O: 'Other',
    };
  }

}
