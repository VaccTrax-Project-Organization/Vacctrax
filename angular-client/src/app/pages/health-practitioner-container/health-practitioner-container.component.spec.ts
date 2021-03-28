import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPractitionerContainerComponent } from './health-practitioner-container.component';

describe('HealthPractitionerContainerComponent', () => {
  let component: HealthPractitionerContainerComponent;
  let fixture: ComponentFixture<HealthPractitionerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthPractitionerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPractitionerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
