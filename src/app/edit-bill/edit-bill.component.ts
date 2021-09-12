import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewBill } from '../model/new-bill';
import { Order } from '../model/order';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.css']
})
export class EditBillComponent implements OnInit {
  editBillForm!: FormGroup;
  newBill: NewBill;
  order: Order;
  today = this.formatCurrentDate();

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public parentData: any,
    private dialogRef: MatDialogRef<EditBillComponent>,
    public dialog: MatDialog,
    private billingService: BillingService) { }

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
    this.newBill = new NewBill();
      this.order = new Order();
      this.order.orderDate = this.today;
      this.order.orderStatus = "Pending";
      const controls = this.editBillForm.controls;
      this.newBill.totalCost = controls.totalCost.value;
      this.newBill.billDate = this.today;
      this.newBill.totalItem = this.parentData.totalItem;
      this.newBill.order = this.parentData.order.orderId;
      this.newBill.billId = this.parentData.billId;

      this.billingService.updateBill(this.parentData.billId, this.newBill).subscribe((obj: any) => {
          console.log('Bill updated successfully!' + obj);
          this.dialog.closeAll();
          console.log(this.editBillForm.value);
      });
    
  }

  formatCurrentDate(): string {
    var d = new Date(Date.now()),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
}
