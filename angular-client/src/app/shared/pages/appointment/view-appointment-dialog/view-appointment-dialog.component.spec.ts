import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentDialogComponent } from './view-appointment-dialog.component';

describe('ViewAppointmentComponent', () => {
  let component: ViewAppointmentDialogComponent;
  let fixture: ComponentFixture<ViewAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
