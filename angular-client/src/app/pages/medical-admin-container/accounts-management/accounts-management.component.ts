import {Component, OnDestroy, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';
import {MatTableDataSource} from '@angular/material/table';
import {Inventory} from '../../../models/interfaces/inventory.interface';
import {SubSink} from 'subsink';
import {AppointmentService} from '../../../services/appointment/appointment.service';

@Component({
  selector: 'app-accounts-management',
  templateUrl: './accounts-management.component.html',
  styleUrls: ['./accounts-management.component.scss']
})
export class AccountsManagementComponent implements OnInit, OnDestroy {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  private subSink: SubSink;

  constructor(private appointmentService: AppointmentService) {
    this.subSink = new SubSink();
  }
  public role = Role;

  ngOnInit() {
    this.displayedColumns = ['name', 'email', 'type', 'actions'];

    this.getAccounts();
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  public getAccounts() {
    this.subSink.add(this.appointmentService.getAccounts().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<any>(res);
    }, error => {
      console.log(error);
    }));
  }

}
