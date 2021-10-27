import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/models/enums/role.enum';
import { Inventory } from 'src/app/models/interfaces/inventory.interface';

@Component({
  selector: 'app-inventory-statistics',
  templateUrl: './inventory-statistics.component.html',
  styleUrls: ['./inventory-statistics.component.scss']
})
export class InventoryStatisticsComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Inventory>;

  constructor() { 
  }
  public role = Role;

  ngOnInit() {
    this.displayedColumns = ['name', 'quantity', 'type', 'actions'];

    this.dataSource = new MatTableDataSource<Inventory>([{
      Name: 'pfizer',
      Quantity: 300,
      Type: 'vector-based',
      Actions: () => { }
    }]);

  }



}
