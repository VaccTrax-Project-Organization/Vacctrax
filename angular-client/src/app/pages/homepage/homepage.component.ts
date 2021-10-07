import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SubSink} from 'subsink';
import {Router} from '@angular/router';

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
