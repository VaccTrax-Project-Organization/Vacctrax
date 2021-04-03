import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentContainerComponent } from './government-container.component';

describe('GovernmentContainerComponent', () => {
  let component: GovernmentContainerComponent;
  let fixture: ComponentFixture<GovernmentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
