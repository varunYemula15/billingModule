import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.css']
})
export class DeleteConfirmationModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteConfirmationModalComponent>,
    public dialog: MatDialog,
    private billingService: BillingService) { }

  ngOnInit(): void {
  }
  delete() {
    console.log(this.data.billId);
    this.billingService.deleteBill(this.data.billId).subscribe((obj: any)=>{
      if (obj === "SUCCESS") {
        // redirect to home page
        this.clear();
      }
    });
  }

  clear() {
    this.dialog.closeAll();
  }
}
