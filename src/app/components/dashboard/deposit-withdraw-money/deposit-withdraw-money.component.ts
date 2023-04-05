import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentType } from 'src/app/models/payment-type';
import { ApiService } from 'src/app/services/api.service';
import { DepositWithdrawModalComponent } from './deposit-withdraw-modal/deposit-withdraw-modal.component';
import { WithdrawModalComponent } from './withdraw-modal/withdraw-modal.component';

@Component({
  selector: 'app-deposit-withdraw-money',
  templateUrl: './deposit-withdraw-money.component.html',
  styleUrls: ['./deposit-withdraw-money.component.css'],
})
export class DepositWithdrawMoneyComponent implements OnInit {
  @Input() type: string = '';
  @Input('data-payment') dataPayment: string = '';
  types: PaymentType[] | undefined = [];
  status:any;
  constructor(private readonly api: ApiService, public dialog: MatDialog) {
    this.status = {
      msg: '',
      msgType: '',
    };
}

  ngOnInit(): void {
    if (this.type == 'deposit') {
      this.getDepositType();
    } else {
      this.getWithdrawType();
    }
  }

  getDepositType(): void {
    this.api.depositType().subscribe(
      (data) => {
        this.types = data.data;
      },
      (error) => {
        this.status.msg = error.error.message;
        this.status.msgType = "error";
      }
    );
  }

  getWithdrawType(): void {
    this.api.withdrawType().subscribe(
      (data) => {
        this.types = data.data;
      },
      (error) => {
        this.status.msg = error.error.message;
        this.status.msgType = "error";
      }
    );
  }
  openDialog(
    id: number | undefined,
    bank: string | undefined,
    type: string,
    title: string | undefined
  ): void {
    if(type=='deposit')
    {
      const dialogRef = this.dialog.open(DepositWithdrawModalComponent, {
        id: 'withdraw-deposit-modal',
        // width: '93%',
        data: { id: id, type: this.type, bank: bank, title: title },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
  }
  else
  {
    const dialogRef = this.dialog.open(WithdrawModalComponent, {
      id: 'withdraw-modal',
      // width: '93%',
      data: { id: id, type: this.type, bank: bank, title: title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  }
}
