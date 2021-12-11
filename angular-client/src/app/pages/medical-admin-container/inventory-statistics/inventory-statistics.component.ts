import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { concatMap, filter, take } from 'rxjs/operators';
import { Role } from 'src/app/models/enums/role.enum';
import { Inventory } from 'src/app/models/interfaces/inventory.interface';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { QuantityDialogComponent } from './quantity-dialog/quantity-dialog.component';

@Component({
  selector: 'inventory-statistics',
  templateUrl: './inventory-statistics.component.html',
  styleUrls: ['./inventory-statistics.component.scss']
})
export class InventoryStatisticsComponent implements OnInit {
  displayedColumns: string[];
  dataSource$: Observable<Inventory[]>;
  role = Role;

  constructor(
    private inventoryService: InventoryService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.displayedColumns = ['name', 'quantity', 'shelfLife', 'actions'];
    this.dataSource$ = this.inventoryService.getInventoryList();
  }

  updateInventoryQuantity(id: string, quantity: number): void {
    const dialogRef = this.matDialog.open(QuantityDialogComponent, {
      disableClose: true,
      data: quantity,
      panelClass: 'dialog-panel-class'
    });

    dialogRef.afterClosed().pipe(
      take(1),
      filter(res => res !== false),
      concatMap(quantity => this.inventoryService.updateInventoryItemQuantity(id, quantity))
    ).subscribe(() => {
      this.dataSource$ = this.inventoryService.getInventoryList();
    });
  }
}
