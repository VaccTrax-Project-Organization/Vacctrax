import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAppointmentDetailsComponent } from './modify-appointment-details.component';

describe('ModifyAppointmentDetailsComponent', () => {
  let component: ModifyAppointmentDetailsComponent;
  let fixture: ComponentFixture<ModifyAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAppointmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
