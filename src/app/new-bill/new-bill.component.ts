import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {
  newBillForm!: FormGroup;
  today = new Date(Date.now()).toLocaleString().split(',')[0];
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewBillComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newBillForm = this.fb.group({
      billId: ['', Validators.required],
      Order: ['food', Validators.required],
      totalItems: [1, Validators.required],
      totalCost: [0, Validators.required],
    });
  }

  onOk()
    {
      for (const i in this.newBillForm.controls) {
        if (this.newBillForm.controls[i]) {
          this.newBillForm.controls[i].markAsDirty();
          this.newBillForm.controls[i].updateValueAndValidity();
        }
      }
      if (!this.newBillForm.valid) {
        return;
      }
      this.submitNewBill();
    }

    submitNewBill(){

    }

}
