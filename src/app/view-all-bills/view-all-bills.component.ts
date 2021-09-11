import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  billDate: string;
  billId: number;
  totalCost: number;
  totalItem: number;
  billOrderFK: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
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


  displayedColumns: string[] = ['billId', 'billDate', 'totalCost', 'totalItem', 'billOrderFK'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {

  }

}
