import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateVaccineDialogComponent } from './add-update-vaccine-dialog.component';

describe('AddUpdateVaccineDialogComponent', () => {
  let component: AddUpdateVaccineDialogComponent;
  let fixture: ComponentFixture<AddUpdateVaccineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateVaccineDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateVaccineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
