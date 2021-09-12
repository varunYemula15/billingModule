import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.css']
})
export class EditBillComponent implements OnInit {
  editBillForm!: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public parentData: any,
    private dialogRef: MatDialogRef<EditBillComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.parentData);
    this.editBillForm = this.fb.group({
      billDate: [{ value: this.parentData.billDate, disabled: true }],
      billId: [{ value: this.parentData.billId, disabled: true }, Validators.required],
      billOrderFK: [{ value: this.parentData.billOrderFK, disabled: true }, Validators.required],
      totalCost: [this.parentData.totalCost, Validators.required],
      totalItem: [this.parentData.totalItem, Validators.required],
    });
  }
  updateBill() {
    for (const i in this.editBillForm.controls) {
      if (this.editBillForm.controls[i]) {
        this.editBillForm.controls[i].markAsDirty();
        this.editBillForm.controls[i].updateValueAndValidity();
      }
    }
    if (!this.editBillForm.valid) {
      return;
    }
    for (const i in this.editBillForm.controls) {
      if (this.editBillForm.controls[i]) {
        this.editBillForm.controls[i].enable();
      }
    }
    this.dialog.closeAll();
    console.log(this.editBillForm.value);
  }
}
