import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {VaccinesListComponent} from './vaccines-list.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {NavigationBarComponent} from '../../../shared/pages/navigation-bar/navigation-bar.component';

describe('VaccinesListComponent', () => {
  let component: VaccinesListComponent;
  let fixture: ComponentFixture<VaccinesListComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VaccinesListComponent, NavigationBarComponent],
      imports: [MatTableModule, MatIconModule, MatButtonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinesListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.displayedColumns = ['vaccineName', 'approvedDateTime', 'type', 'actions'];
    component.dataSource = new MatTableDataSource<any>([]
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
