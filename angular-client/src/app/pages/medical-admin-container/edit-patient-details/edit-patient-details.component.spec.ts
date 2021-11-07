import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientDetailsComponent } from './edit-patient-details.component';

describe('EditPatientDetailsComponent', () => {
  let component: EditPatientDetailsComponent;
  let fixture: ComponentFixture<EditPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
