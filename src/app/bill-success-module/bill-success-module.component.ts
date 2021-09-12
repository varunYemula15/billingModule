import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bill-success-module',
  templateUrl: './bill-success-module.component.html',
  styleUrls: ['./bill-success-module.component.css']
})
export class BillSuccessModuleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BillSuccessModuleComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  clear(){
    this.dialog.closeAll();
  }
}
