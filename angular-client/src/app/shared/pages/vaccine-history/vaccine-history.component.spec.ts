import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineHistoryComponent } from './vaccine-history.component';

describe('VaccineHistoryComponent', () => {
  let component: VaccineHistoryComponent;
  let fixture: ComponentFixture<VaccineHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
