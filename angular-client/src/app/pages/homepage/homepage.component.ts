import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {GenericTwoOptionDialogComponent} from '../shared/generic-two-option-dialog/generic-two-option-dialog.component';
import {GenericTwoOptionDialogData} from '../../models/generic-two-option-dialog-data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  private subSink: SubSink;

  constructor(public dialog: MatDialog) {
    this.subSink = new SubSink();
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  // this method should not be within the homepage, its temporary for until we
  // have the appointment cancellation stuff ready
  public openCancelVaccinationDialog(): void {
    const dialogTitle = 'CANCEL APPOINTMENT';
    const dialogDescription = 'Are you sure you would like to cancel the selected appointment (enter appoint number here or something), this action cannot be undone';
    const dialogRef = this.dialog.open(GenericTwoOptionDialogComponent, {
      panelClass: 'dialog-panel-class',
      width: '650px',
      height: '350px',
      disableClose: true,
      autoFocus: false,
      data: new GenericTwoOptionDialogData(dialogTitle, dialogDescription)
    });

    // get call back data on close
    this.subSink.add(dialogRef.afterClosed().subscribe(res => {
      console.log('after close callback', res);
    }));
  }
}
