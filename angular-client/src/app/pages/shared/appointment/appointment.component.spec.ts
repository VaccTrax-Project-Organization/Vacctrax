import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppointmentComponent} from './appointment.component';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentComponent, NavigationBarComponent ],
      imports: [ MatTableModule, MatIconModule, MatButtonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.displayedColumns = ['patientName', 'appointmentDateTime', 'practitionerName', 'status', 'vaccine', 'actions'];
    component.dataSource = new MatTableDataSource<any>([
      {
        patientName: 'June Elder',
        appointmentDateTime: 'January 1 2021 at 4:30 pm',
        practitionerName: 'Dr.Drake',
        status: 'Requested',
        vaccine: 'Pfizer'
      },
      {
        patientName: 'Bob Barker',
        appointmentDateTime: 'January 1 2021 at 4:30 pm',
        practitionerName: 'Dr.Drake',
        status: 'Requested',
        vaccine: 'Pfizer'
      },
      {
        patientName: 'Jonathan Joestar',
        appointmentDateTime: 'January 1 2021 at 4:30 pm',
        practitionerName: 'Dr.Drake',
        status: 'Requested',
        vaccine: 'Pfizer'
      },
      {
        patientName: 'John Henry',
        appointmentDateTime: 'January 1 2021 at 4:30 pm',
        practitionerName: 'Dr.Drake',
        status: 'Requested',
        vaccine: 'Pfizer'
      },
      ]
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create mat-table', () => {
    expect(de.query(By.css('mat-table')).nativeElement).toBeTruthy();
  });
});
