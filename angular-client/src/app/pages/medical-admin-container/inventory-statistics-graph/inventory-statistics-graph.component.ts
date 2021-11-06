import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-statistics-graph',
  templateUrl: './inventory-statistics-graph.component.html',
  styleUrls: ['./inventory-statistics-graph.component.scss']
})
export class InventoryStatisticsGraphComponent implements OnInit {

  chartOptions: any;
  labels: string[];
  chartData: any[];
  colors: any[];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    }
  
    //LABELS FOR X AXIS
    this.labels =  ['Pfizer', 'Moderna', 'AstroZeneca', 'Janssen',];
  
    //CHART DATA FOR X AXIS
    this.chartData = [
      {
        label: 'Vaccine Inventory',
        data: [31, 56, 171, 80] 
      }
    ];
  
      // CHART COLOR.
    this.colors = [
      { // COLOR OF BAR
        backgroundColor: 'rgba(23,192,236,0.57)'
      },

    ]
  }

}
