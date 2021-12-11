import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quantity-dialog',
  templateUrl: './quantity-dialog.component.html',
  styleUrls: ['./quantity-dialog.component.scss'],
})
export class QuantityDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public quantity,
  ) { }

  preventNegativeValue(): void {
    this.quantity = Math.abs(this.quantity);
  }
}
