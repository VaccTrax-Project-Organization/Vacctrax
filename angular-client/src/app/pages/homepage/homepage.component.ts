import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {GenericTwoOptionDialogComponent} from '../shared/generic-two-option-dialog/generic-two-option-dialog.component';
import {GenericTwoOptionDialogData} from "../../models/generic-two-option-dialog-data";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private subSink: SubSink;

  constructor(public dialog: MatDialog) {
    this.subSink = new SubSink();
  }

  public ngOnInit(): void {
    this.subSink.unsubscribe();
  }

  public openCancelVaccinationDialog(): void {
    const dialogRef = this.dialog.open(GenericTwoOptionDialogComponent, {
      panelClass: 'dialog-panel-class',
      width: '700px',
      height: '400px',
      disableClose: true,
      data: new GenericTwoOptionDialogData('CONFIRMATION', 'Are you sure you would like to cancel the selected appoint (enter appoint number here or something), this action cannot be undone')
    });

    // get call back data on close
    this.subSink.add(dialogRef.afterClosed().subscribe(res => {
      console.log('after close callback', res);
    }));
  }
}
