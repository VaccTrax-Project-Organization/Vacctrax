import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPractitionerDashboardComponent } from './health-practitioner-dashboard.component';

describe('HealthPractitionerDashboardComponent', () => {
  let component: HealthPractitionerDashboardComponent;
  let fixture: ComponentFixture<HealthPractitionerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthPractitionerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPractitionerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
