import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineRequestedAppointmentDialogComponent } from './decline-requested-appointment-dialog.component';

describe('DeclineRequestedAppointmentDialogComponent', () => {
  let component: DeclineRequestedAppointmentDialogComponent;
  let fixture: ComponentFixture<DeclineRequestedAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclineRequestedAppointmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineRequestedAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
