import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {GenericTwoOptionDialogComponent} from '../../shared/pages/generic-two-option-dialog/generic-two-option-dialog.component';
import {GenericTwoOptionDialogData} from '../../models/generic-two-option-dialog-data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  private subSink: SubSink;

  constructor(public dialog: MatDialog, private router: Router) {
    this.subSink = new SubSink();
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
