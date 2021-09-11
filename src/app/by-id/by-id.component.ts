import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit {
  id = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.id.hasError('required')) {
      return 'You must enter a id';
    }

    return this.id.hasError('id') ? 'Not a valid id' : '';
  }
  constructor(private dialogRef: MatDialogRef<ByIdComponent>,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }
  onOk() {
    this.router.navigateByUrl(`/viewAllBills`);
    this.dialog.closeAll()
  }
}
