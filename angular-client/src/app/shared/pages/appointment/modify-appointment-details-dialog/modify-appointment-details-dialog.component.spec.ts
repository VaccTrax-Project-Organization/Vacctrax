import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAppointmentDetailsDialogComponent } from './modify-appointment-details-dialog.component';

describe('ModifyAppointmentDetailsDialogComponent', () => {
  let component: ModifyAppointmentDetailsDialogComponent;
  let fixture: ComponentFixture<ModifyAppointmentDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAppointmentDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAppointmentDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
