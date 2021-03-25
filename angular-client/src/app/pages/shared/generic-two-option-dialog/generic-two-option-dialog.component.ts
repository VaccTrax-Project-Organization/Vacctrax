import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {GenericTwoOptionDialogData} from '../../../models/generic-two-option-dialog-data';

@Component({
  selector: 'app-generic-two-option-dialog',
  templateUrl: './generic-two-option-dialog.component.html',
  styleUrls: ['./generic-two-option-dialog.component.scss']
})
export class GenericTwoOptionDialogComponent implements OnInit {
  // This dialog component retrieves data from the parent component that calls it
  // All text fields visible on the component are editable through the GenericTwoOptionDialogData object
  constructor(@Inject(MAT_DIALOG_DATA) public data: GenericTwoOptionDialogData) { }

  public ngOnInit(): void {
  }

}
