import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedEligibilityCheckComponent } from './failed-eligibility-check.component';

describe('FailedEligibilityCheckComponent', () => {
  let component: FailedEligibilityCheckComponent;
  let fixture: ComponentFixture<FailedEligibilityCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedEligibilityCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedEligibilityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
