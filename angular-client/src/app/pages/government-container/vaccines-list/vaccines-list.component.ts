import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from '../../../models/enums/role.enum';
import {MatDialog} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {Vaccine} from '../../../models/vaccine.model';

@Component({
  selector: 'app-appointment',
  templateUrl: './vaccines-list.component.html',
  styleUrls: ['./vaccines-list.component.scss']
})

export class VaccinesListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) public sort: MatSort;
  @Input() public roleInput: Role;

  public role: Role;
  public showAction: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Vaccine>;
  private subSink: SubSink;

  constructor(public dialog: MatDialog,) {
    this.subSink = new SubSink();
    this.displayedColumns = ['vaccineName', 'approvedDateTime', 'type', 'actions'];
    this.dataSource = new MatTableDataSource<Vaccine>();
  }

  ngOnInit() {
    this.showAction = this.roleInput === Role.GOVERNMENT;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
