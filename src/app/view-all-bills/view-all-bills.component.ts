import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

import { Bill } from "../model/bill";
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';
import { EditBillComponent } from '../edit-bill/edit-bill.component';

export interface PeriodicElement {
  billDate: string;
  billId: number;
  totalCost: number;
  totalItem: number;
  billOrderFK: number;
}
const ELEMENT_DATA1: PeriodicElement[] = [
  { billId: 1, billDate: '22-AUG-21', totalCost: 1.0079, totalItem: 1, billOrderFK: 4 },
  { billId: 2, billDate: '22-AUG-21', totalCost: 4.0026, totalItem: 3, billOrderFK: 4 },
  { billId: 3, billDate: '22-AUG-21', totalCost: 6.941, totalItem: 3, billOrderFK: 4 },
  { billId: 4, billDate: '22-AUG-21', totalCost: 9.0122, totalItem: 4, billOrderFK: 4 },
  { billId: 5, billDate: '22-AUG-21', totalCost: 10.811, totalItem: 6, billOrderFK: 4 },
  { billId: 6, billDate: '22-AUG-21', totalCost: 12.0107, totalItem: 7, billOrderFK: 4 },
  { billId: 7, billDate: '22-AUG-21', totalCost: 14.0067, totalItem: 8, billOrderFK: 4 },
  { billId: 8, billDate: '22-AUG-21', totalCost: 15.9994, totalItem: 9, billOrderFK: 4 },
  { billId: 9, billDate: '22-AUG-21', totalCost: 18.9984, totalItem: 12, billOrderFK: 4 },
  { billId: 10, billDate: '22-AUG-21', totalCost: 20.1797, totalItem: 3, billOrderFK: 4 },
];

@Component({
  selector: 'app-view-all-bills',
  templateUrl: './view-all-bills.component.html',
  styleUrls: ['./view-all-bills.component.css']
})

export class ViewAllBillsComponent implements OnInit {

  ELEMENT_DATA1: Bill[];
  billId: number;
  sDate: string;
  eDate: string;
  displayedColumns: string[] = ['billId', 'billDate', 'totalCost', 'totalItem', 'billOrderFK', 'actions'];
  // dataSource = ELEMENT_DATA1;

  constructor(private billingService: BillingService, private router: Router, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.billId = params.id;
        this.sDate = params.sDate;
        this.eDate = params.eDate;
        console.log(this.billId); // price
      }
    );
    this.retrieveBills();
  }

  retrieveBills(): void {
    this.billingService.viewBills(this.billId, this.sDate, this.eDate).subscribe((obj: any) => {
      if (obj.constructor == Array) {
        this.ELEMENT_DATA1 = obj;
      } else {
        this.ELEMENT_DATA1 = [obj];
      }
      
    });
  }

  goBack() {
    this.router.navigateByUrl(`/home`);
  }
  editBill(row: any) {
    const dialogRef = this.dialog.open(EditBillComponent, {
      width: '650px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.retrieveBills(); // reload bills after edit
    });
  }
  deleteBill(row: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      width: '650px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.retrieveBills(); // reload bills after delete
    });
  }
}
