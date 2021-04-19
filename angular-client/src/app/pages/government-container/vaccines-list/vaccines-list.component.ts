import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from '../../../models/enums/role.enum';
import {MatDialog} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {Vaccine} from '../../../models/vaccine.model';
import {VaccinesService} from 'src/app/services/vaccines/vaccines.service';
import {GenericTwoOptionDialogComponent} from 'src/app/shared/pages/generic-two-option-dialog/generic-two-option-dialog.component';
import {GenericTwoOptionDialogData} from 'src/app/models/generic-two-option-dialog-data';
import {AddUpdateVaccineDialogComponent} from 'src/app/shared/pages/add-update-vaccine-dialog/add-update-vaccine-dialog.component';

@Component({
  selector: 'app-vaccines-list',
  templateUrl: './vaccines-list.component.html',
  styleUrls: ['./vaccines-list.component.scss']
})

export class VaccinesListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) public sort: MatSort;
  @Input() public roleInput: Role = Role.GOVERNMENT;

  public role: Role;
  public showAction: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Vaccine>;
  private subSink: SubSink;

  constructor(public dialog: MatDialog,
              public vaccinesService: VaccinesService) {
    this.subSink = new SubSink();
    this.displayedColumns = ['vaccineName', 'approvedDateTime', 'type', 'approvedProvinces', 'actions'];
    this.dataSource = new MatTableDataSource<Vaccine>();
  }

  ngOnInit() {
    this.showAction = this.roleInput === Role.GOVERNMENT;
    this.getVaccineTableData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /*
    To unsubscribe from subscription method
   */
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  /*
    Open Remove Vaccine Dialog
   */
  public openRemoveVaccineDialog(element: Vaccine): void {
    const dialogRef = this.dialog.open(GenericTwoOptionDialogComponent, {
      disableClose: true,
      data: new GenericTwoOptionDialogData("Remove Vaccine", `Are you sure you wish to remove the ${element.name} vaccine?`),
      panelClass: 'dialog-panel-class'
    });

    this.subSink.add(dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        /*
          Once the dialog closed with a true value it calls this method to remove the vaccine
        */
        this.subSink.add(this.vaccinesService.removeVaccine(element._id).subscribe(removeVaccineRes => {
          /*
          Once the API executed and returned a response,
          it will execute the next method to retrieve the data from the database, in this case the vaccines
          */
          this.getVaccineTableData();
        }));
      }
    }));
  }

  /*
    Open Update Vaccine Dialog
   */
  public openUpdateVaccineDialog(element: Vaccine): void {
    const dialogRef = this.dialog.open(AddUpdateVaccineDialogComponent, {
      panelClass: 'dialog-panel-class',
      data: {
        title: 'Update',
        vaccine: element
      }
    });
    this.subSink.add(dialogRef.afterClosed().subscribe((vaccine: Vaccine) => {
      // the newly updated vaccine object will contain the existing vaccine id for update
      vaccine._id = element._id;
      vaccine.isRationed = element.isRationed;
      vaccine.vaccineId = element.vaccineId;
      /*
        Once the dialog closed with a true value it calls this method to update the vaccine
      */
      this.subSink.add(this.vaccinesService.updateVaccine(vaccine).subscribe(updateResponse => {
        /*
          Once the API executed and returned a response,
          it will execute the next method to retrieve the data from the database, in this case the vaccines
        */
        this.getVaccineTableData();
      }));
    }));

  }
  /*
    Open Add Vaccine Dialog
   */
  public openAddVaccineDialog(): void {
    const dialogRef = this.dialog.open(AddUpdateVaccineDialogComponent, {
      panelClass: 'dialog-panel-class',
      data: {
        title: 'Add',
      }
    });

    this.subSink.add(dialogRef.afterClosed().subscribe((vaccine: Vaccine) => {
      /*
      Once the dialog closed with a true value it calls this method to add the vaccine
       */
      this.subSink.add(this.vaccinesService.addVaccine(vaccine).subscribe(res => {
        /*
          Once the API executed and returned a response,
          it will execute the next method to retrieve the data from the database, in this case the vaccines
        */
        this.getVaccineTableData();
      }));
    }));
  }
  /*s
  This method to retrieve the data from the database, in this case the vaccines
  */
  private getVaccineTableData(): void {
    this.subSink.add(this.vaccinesService.getVaccines().subscribe((res: Vaccine[]) => {
      this.dataSource = new MatTableDataSource<Vaccine>(res);
    }));
  }
}
