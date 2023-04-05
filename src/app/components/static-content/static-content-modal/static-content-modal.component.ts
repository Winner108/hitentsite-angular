import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-static-content-modal',
  templateUrl: './static-content-modal.component.html',
  styleUrls: ['./static-content-modal.component.css']
})
export class StaticContentModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StaticContentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(data)
    }

  ngOnInit(): void {
  }

}
