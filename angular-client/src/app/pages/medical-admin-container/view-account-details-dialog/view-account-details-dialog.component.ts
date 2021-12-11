import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-view-account-details-dialog',
  templateUrl: './view-account-details-dialog.component.html',
  styleUrls: ['./view-account-details-dialog.component.scss']
})
export class ViewAccountDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  close(){
    this.dialog.closeAll();
  }

}
