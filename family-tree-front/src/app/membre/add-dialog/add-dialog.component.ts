import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  /**
   * Constructor
   * @param {MatDialogRef<AddDialogComponent>} dialogRef
   */
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) { }

  /**
   * @param {any} result
   */
  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  /**
   * ngOnInit implementation
   */
  ngOnInit() {
  }

  onCancel() {
    this.closeDialog();
  }

  onSave(person) {
    this.closeDialog(person);
  }
}
