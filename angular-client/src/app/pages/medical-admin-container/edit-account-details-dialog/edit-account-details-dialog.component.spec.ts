import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountDetailsDialogComponent } from './edit-account-details-dialog.component';

describe('EditAccountDetailsDialogComponent', () => {
  let component: EditAccountDetailsDialogComponent;
  let fixture: ComponentFixture<EditAccountDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
