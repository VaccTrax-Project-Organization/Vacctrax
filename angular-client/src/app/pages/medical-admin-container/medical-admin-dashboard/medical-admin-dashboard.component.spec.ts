import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAdminDashboardComponent } from './medical-admin-dashboard.component';

describe('MedicalAdminDashboardComponent', () => {
  let component: MedicalAdminDashboardComponent;
  let fixture: ComponentFixture<MedicalAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
