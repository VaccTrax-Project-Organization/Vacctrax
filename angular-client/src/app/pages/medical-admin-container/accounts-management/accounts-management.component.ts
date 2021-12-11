import {Component, OnDestroy, OnInit} from '@angular/core';
import {Role} from '../../../models/enums/role.enum';
import {MatTableDataSource} from '@angular/material/table';
import {SubSink} from 'subsink';
import {AppointmentService} from '../../../services/appointment/appointment.service';
import {MatDialog} from '@angular/material/dialog';
import {ViewAccountDetailsDialogComponent} from '../view-account-details-dialog/view-account-details-dialog.component';
import {EditAccountDetailsDialogComponent} from '../edit-account-details-dialog/edit-account-details-dialog.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-accounts-management',
  templateUrl: './accounts-management.component.html',
  styleUrls: ['./accounts-management.component.scss']
})
export class AccountsManagementComponent implements OnInit, OnDestroy {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  private subSink: SubSink;
  public searchForm: FormGroup;
  private apiData = [];
  private searchedRows = [];

  constructor(private appointmentService: AppointmentService, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.subSink = new SubSink();
  }
  public role = Role;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchVal: [''],
    });
    this.displayedColumns = ['name', 'email', 'type', 'actions'];

    this.getAccounts();
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  public getAccounts() {
    this.subSink.add(this.appointmentService.getAccounts().subscribe(res => {
      console.log(res);
      this.apiData = res;
      this.searchedRows = res;
      this.searchForm.controls.searchVal.setValue('');
      this.dataSource = new MatTableDataSource<any>(res);
    }, error => {
      console.log(error);
    }));
  }

  public openViewAccountDialog(element: any) {
    console.log(element);
    this.dialog.open(ViewAccountDetailsDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: false,
      autoFocus: false,
      height: '300px',
      width: '600px',
      data: element,
    });
  }

  public openEditAccountDialog(element: any) {
    console.log(element);
    const dialogRef = this.dialog.open(EditAccountDetailsDialogComponent, {
      panelClass: 'dialog-panel-class',
      disableClose: false,
      autoFocus: false,
      data: element,
    });

    this.subSink.add(dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getAccounts();
      }
    }))
  }

  onSearchValueChange(ev) {
    console.log(this.searchForm.controls.searchVal.value);
    const filteredRows = this.apiData.filter((row) => {
      const combinationTitleAndTypeAndStatus = row?.firstName + row?.lastName + row?.type + row?.email;
      return combinationTitleAndTypeAndStatus
        .toLowerCase()
        .includes(this.searchForm?.controls?.searchVal?.value.toLowerCase());
    });
    this.searchedRows = filteredRows;
    this.dataSource = new MatTableDataSource<any>(this.searchedRows);
  }

}
