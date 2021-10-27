import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/enums/role.enum';
import { Inventory } from 'src/app/models/interfaces/inventory.interface';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'inventory-statistics',
  templateUrl: './inventory-statistics.component.html',
  styleUrls: ['./inventory-statistics.component.scss']
})
export class InventoryStatisticsComponent implements OnInit {
  displayedColumns: string[];
  dataSource$: Observable<Inventory[]>;
  role = Role;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.displayedColumns = ['name', 'quantity', 'shelfLife', 'actions'];
    this.dataSource$ = this.inventoryService.getInventoryList();
  }
}
