import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NewBill } from '../model/new-bill';
import { Order } from '../model/order';
import { BillingService } from '../service/billing.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BillSuccessModuleComponent} from '../bill-success-module/bill-success-module.component';


@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {
  newBillForm!: FormGroup;
  //today = new Date(Date.now()).toLocaleString().split(',')[0];
  today = this.formatCurrentDate();
  newBill: NewBill;
  order: Order;
  constructor(private fb: FormBuilder,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    // private dialogRef: MatDialogRef<NewBillComponent>,
    public dialog: MatDialog,
    private billingService: BillingService,
  private router: Router) { }

  ngOnInit(): void {
    this.newBillForm = this.fb.group({
      // billId: ['', Validators.required],
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
      this.newBill = new NewBill();
      this.order = new Order();
      this.order.orderDate = this.today;
      this.order.orderStatus = "Pending";
      const controls = this.newBillForm.controls;
      this.newBill.totalCost = controls.totalCost.value;
      this.newBill.billDate = this.today;
      this.newBill.totalItem = 3;
      this.newBill.order = this.order;

      this.billingService.newBill(this.newBill).subscribe((obj: any) => {
          console.log('New bill created successfully!' + obj);
      });
    }

    addBill() {
      console.log('adding new bill');
      this.openDialog();
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
  clear(){
    this.newBillForm.reset();
  }
  goBack(){
    this.router.navigateByUrl(`/home`);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BillSuccessModuleComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
