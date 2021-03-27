import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientContainerComponent } from './patient-container.component';

describe('PatientContainerComponent', () => {
  let component: PatientContainerComponent;
  let fixture: ComponentFixture<PatientContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
