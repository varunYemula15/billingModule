import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ViewAllBillsComponent } from './view-all-bills/view-all-bills.component';
import { ViewAllBillsByDateComponent } from './view-all-bills-by-date/view-all-bills-by-date.component';
import { ViewByBillIdComponent } from './view-by-bill-id/view-by-bill-id.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "newBill", component: NewBillComponent },
  { path: "viewAllBills", component: ViewAllBillsComponent },
  { path: "viewAllBillsByDate", component: ViewAllBillsByDateComponent },
  { path: "viewBillById", component: ViewByBillIdComponent },
  { path: "", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
