import { Component, Input, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.css'],
})
export class BankModalComponent implements OnInit {

  status: any;
  payment: any;
  isSubmited: boolean = true;
  constructor(
    private readonly api: ApiService,
    public dialogRef: MatDialogRef<BankModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.status = {
      msg: '',
      msgType: '',
    };
    this.payment = {
      type: '1',
      account_name: '',
      iban: '',
      account_number: '',
      identity_number: '',
      identity_number_date: '',
      birthday: '',
      identity_number_lastdate: '',
      city: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(): void {

    if(this.payment.account_name=='')
    this.payment.account_name=this.payment.city;
    else
    this.payment.iban = 'TR' + this.payment.iban;
    this.api.bank(this.payment).subscribe(
      (data) => {
        this.status.msg = data.message;
        this.status.msgType = 'success';
        this.isSubmited = true;
        window.location.reload();
      },
      (error) => {
        this.status.msg = error.error.message;
        this.status.msgType = 'error';
      }
    );
  }
}
