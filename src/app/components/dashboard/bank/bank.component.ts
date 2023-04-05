import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bank } from 'src/app/models/bank';
import { ApiService } from 'src/app/services/api.service';
import { BankModalComponent } from './bank-modal/bank-modal.component';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
})
export class BankComponent implements OnInit {
  public banks: Bank[] | undefined = [];
  constructor(private readonly api: ApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.api.getbank().subscribe(
      (data) => {
        this.banks = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deletebank(id: number | undefined): void {
    var agree = confirm('Silmek istediğinizden emin misiniz?');
    if (agree) {
      this.api.deletebank(id).subscribe(
        (data) => {
          location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BankModalComponent, {
      id: 'bank-modal',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
