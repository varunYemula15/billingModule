import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from-and-to-date',
  templateUrl: './from-and-to-date.component.html',
  styleUrls: ['./from-and-to-date.component.css']
})
export class FromAndToDateComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<FromAndToDateComponent>,
  public dialog: MatDialog,
  private router: Router) { }

  ngOnInit(): void {

  }
  onOk(){
    const controls = this.range.controls;
    // const sDate = controls.start.value;
    // const eDate = controls.end.value;
    const sDate = "2021-09-01";
    const eDate = "2021-09-12";
    this.router.navigateByUrl(`/viewAllBills?sDate=`+sDate+"&eDate="+eDate);
    this.dialog.closeAll();
  }
}
