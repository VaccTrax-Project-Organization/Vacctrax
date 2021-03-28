import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubSink} from 'subsink';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './eligibility-check.component.html',
  styleUrls: ['./eligibility-check.component.scss']
})
export class EligibilityCheckComponent implements OnInit {

  public eligibilityForm: FormGroup;
  public currentDate: Date;
  private eligibale;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.currentDate = new Date();
    this.eligibale = [
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
      if (this.eligibale.includes(this.formControls.age.value && this.formControls.eligibleGroup.value && this.formControls.chronicConditions.value && this.formControls.greaterRisk.value)) {
        this.router.navigateByUrl('/patient/dashboard');
      } else {
        this.router.navigateByUrl('/patient/failedEligibilityCheck');
      }
    }
  }
}
