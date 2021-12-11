import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Vaccine} from '../../../models/vaccine.model';

@Component({
  selector: 'app-view-vaccine-details-dialog',
  templateUrl: './view-vaccine-details-dialog.component.html',
  styleUrls: ['./view-vaccine-details-dialog.component.scss']
})
export class ViewVaccineDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Vaccine,private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialog.closeAll();
  }

}
