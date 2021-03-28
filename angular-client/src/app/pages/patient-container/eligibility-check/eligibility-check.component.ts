import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './eligibility-check.component.html',
  styleUrls: ['./eligibility-check.component.scss']
})
export class EligibilityCheckComponent implements OnInit {

  public eligibilityForm: FormGroup;
  public currentDate: Date;
  private eligible: string[];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.currentDate = new Date();
    this.eligible = [
      'ASF',
      'FN',
      'CHHR',
      'LTCHRAS',
      'ALRAS',
      'RHRAS',
      'ECFCHR',
      'PSW',
      'FHCW',
      'OTR',
      'HSCTR',
      'PWNDIWRFMBC',
      'HMDWTLY',
      'KDWEGFR',
      'BAORP',
      'HSWHAOHROD',
      'FHCW',
    ];
  }

  public ngOnInit(): void {
    this.createEligibilityForm();
  }

  get formControls() {
    return this.eligibilityForm.controls;
  }

  private createEligibilityForm(): void {
    this.eligibilityForm = this.formBuilder.group({
      age: ['', Validators.required],
      eligibleGroup: ['', Validators.required],
      chronicConditions: ['', Validators.required],
      greaterRisk: ['', Validators.required]
    });
  }

  public submitEligibilityForm(): void {
    if (this.eligibilityForm.valid) {
      if (this.eligible.includes(this.formControls.age.value)
        && this.eligible.includes(this.formControls.eligibleGroup.value)
        && this.eligible.includes(this.formControls.chronicConditions.value)
        && this.eligible.includes(this.formControls.greaterRisk.value)) {
        this.router.navigate(['/patient/dashboard']);
      } else {
        const navigationExtras: NavigationExtras = {
          state: {
            age: {
              didPass: this.eligible.includes(this.formControls.age.value),
              value: this.formControls.age.value
            },
            eligibleGroup: {
              didPass: this.eligible.includes(this.formControls.eligibleGroup.value),
              value: this.formControls.eligibleGroup.value
            },
            doesChronicConditionsPass: {
              didPass: this.eligible.includes(this.formControls.chronicConditions.value),
              value: this.formControls.chronicConditions.value
            },
            doesGreaterRiskPass: {
              didPass: this.eligible.includes(this.formControls.greaterRisk.value),
              value: this.formControls.greaterRisk.value
            },
          }
        };

        this.router.navigate(['/patient/failedEligibilityCheck'], navigationExtras);
      }
    }
  }
}
