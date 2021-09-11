import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewBillComponent } from '.././new-bill/new-bill.component';
import { FromAndToDateComponent } from '.././from-and-to-date/from-and-to-date.component';
import { ByIdComponent } from '.././by-id/by-id.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewBillComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openFromAndToDate(): void {
    const dialogRef = this.dialog.open(FromAndToDateComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  byId() {
    const dialogRef = this.dialog.open(ByIdComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  navigateTo(path: string) {
    this.router.navigateByUrl(`/${path}`);
  }
}
