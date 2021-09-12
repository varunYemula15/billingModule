import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { NewBillComponent } from './new-bill/new-bill.component';
import { HomeComponent } from './home/home.component';
import { ViewAllBillsComponent } from './view-all-bills/view-all-bills.component';
import { ViewAllBillsByDateComponent } from './view-all-bills-by-date/view-all-bills-by-date.component';
import { ViewByBillIdComponent } from './view-by-bill-id/view-by-bill-id.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FromAndToDateComponent } from './from-and-to-date/from-and-to-date.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ByIdComponent } from './by-id/by-id.component';
import { BillingService } from './service/billing.service';
import { HttpClientModule } from '@angular/common/http';
import { BillSuccessModuleComponent } from './bill-success-module/bill-success-module.component';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBillComponent,
    HomeComponent,
    ViewAllBillsComponent,
    ViewAllBillsByDateComponent,
    ViewByBillIdComponent,
    FromAndToDateComponent,
    ByIdComponent,
    BillSuccessModuleComponent,
    DeleteConfirmationModalComponent,
    EditBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, BillingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
