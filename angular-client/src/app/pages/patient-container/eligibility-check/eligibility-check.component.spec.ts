import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityCheckComponent } from './eligibility-check.component';

describe('EligibilityCheckComponent', () => {
  let component: EligibilityCheckComponent;
  let fixture: ComponentFixture<EligibilityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibilityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
