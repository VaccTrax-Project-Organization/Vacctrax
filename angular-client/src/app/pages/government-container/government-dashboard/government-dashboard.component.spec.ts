import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentDashboardComponent } from './government-dashboard.component';

describe('GovernmentDashboardComponent', () => {
  let component: GovernmentDashboardComponent;
  let fixture: ComponentFixture<GovernmentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
