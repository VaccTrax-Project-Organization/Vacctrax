import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTwoOptionDialogComponent } from './generic-two-option-dialog.component';

describe('GenericTwoOptionDialogComponent', () => {
  let component: GenericTwoOptionDialogComponent;
  let fixture: ComponentFixture<GenericTwoOptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTwoOptionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTwoOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
