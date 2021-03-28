import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAdminContainerComponent } from './medical-admin-container.component';

describe('MedicalAdminContainerComponent', () => {
  let component: MedicalAdminContainerComponent;
  let fixture: ComponentFixture<MedicalAdminContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAdminContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAdminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
