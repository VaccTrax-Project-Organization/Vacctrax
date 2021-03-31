import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedAppointmentsComponent } from './confirmed-appointments.component';

describe('ConfirmedAppointmentsComponent', () => {
  let component: ConfirmedAppointmentsComponent;
  let fixture: ComponentFixture<ConfirmedAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
