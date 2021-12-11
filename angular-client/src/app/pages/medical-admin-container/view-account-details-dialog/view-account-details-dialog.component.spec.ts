import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountDetailsDialogComponent } from './view-account-details-dialog.component';

describe('ViewAccountDetailsDialogComponent', () => {
  let component: ViewAccountDetailsDialogComponent;
  let fixture: ComponentFixture<ViewAccountDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
