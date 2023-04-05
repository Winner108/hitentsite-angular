import { Component, Input, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-deposit-withdraw-modal',
  templateUrl: './deposit-withdraw-modal.component.html',
  styleUrls: ['./deposit-withdraw-modal.component.css'],
})
export class DepositWithdrawModalComponent implements OnInit {
  form_type: number = 0;
  status: any;
  payment: any;
  @Input() type: string | undefined;
  amount: string = '';
  paymentType: string = '';
  bank_name: string = '';
  isSubmited: boolean = false;
  constructor(
    private readonly api: ApiService,
    public dialogRef: MatDialogRef<DepositWithdrawModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.status = {
      msg: '',
      msgType: '',
    };
    this.payment = {
      amount: '',
      data: {
        account_no: '',
        bank_name: '',
        islem_saati: '',
        paymentType: '',
        gonderen: '',
      },
    };
  }

  ngOnInit(): void {
    if (
      this.data.bank == 'aninda-havale' ||
      this.data.bank == 'aninda-kredi-karti' ||
      this.data.bank == 'aninda-papara' ||
      this.data.bank == 'aninda-qr' ||
      this.data.bank == 'aninda-mefete' ||
      this.data.bank == 'jet-cmt' ||
      this.data.bank == 'hizli-havale' ||
      this.data.bank == 'hizlicep' ||
      this.data.bank == 'maksicreditcard' ||
      this.data.bank == 'maksipapara' ||
      this.data.bank == 'maksibanktransfer' ||
      this.data.bank == 'maksicmt' ||
      this.data.bank == 'maksipayfix' ||
      this.data.bank == 'maksicrypto' ||
      this.data.bank == 'maksimefete' ||
      this.data.bank == 'trinkparacreditcard' ||
      this.data.bank == 'trinkparapapara' ||
      this.data.bank == 'trinkparabanktransfer' ||
      this.data.bank == 'trinkparatakas' ||
      this.data.bank == 'trinkparapayfix' ||
      this.data.bank == 'trinkparapep' ||
      this.data.bank == 'minihavale'
    )
      this.form_type = 1;
    if (this.data.bank == 'papara') this.form_type = 2;
    if (this.data.bank == 'payznet') this.form_type = 3;
  }

  onSubmit(): void {
    if (this.data.type == 'deposit') {
      this.payment.id = this.data.id;

      this.api.deposit(this.payment).subscribe(
        (data) => {
          if (
            this.data.bank == 'aninda-havale' ||
            this.data.bank == 'aninda-kredi-karti' ||
            this.data.bank == 'aninda-papara' ||
            this.data.bank == 'aninda-qr' ||
            this.data.bank == 'aninda-mefete' ||
            this.data.bank == 'jet-cmt' ||
            this.data.bank == 'hizli-havale' ||
            this.data.bank == 'hizlicep' ||
            this.data.bank == 'maksicreditcard' ||
            this.data.bank == 'maksipapara' ||
            this.data.bank == 'maksibanktransfer' ||
            this.data.bank == 'maksicmt' ||
            this.data.bank == 'maksipayfix' ||
            this.data.bank == 'maksicrypto' ||
            this.data.bank == 'maksimefete' ||
            this.data.bank == 'trinkparacreditcard' ||
            this.data.bank == 'trinkparapapara' ||
            this.data.bank == 'trinkparabanktransfer' ||
            this.data.bank == 'trinkparatakas' ||
            this.data.bank == 'trinkparapayfix' ||
            this.data.bank == 'trinkparapep' ||
            this.data.bank == 'minihavale'||
            this.data.bank == 'payznet'
          ) {
            window.location.href = data.data.link;
          }else{
          this.isSubmited = true;
          this.status.msg = data.message;
          this.status.msgType = 'success';
        //  window.location.reload();
        }
        },
        (error) => {
          this.status.msg = error.error.message;
          this.status.msgType = 'error';
        }
      );
    } else {
      this.api
        .withdraw({
          amount: this.payment.amount,
          paymentType: this.payment.paymentType,
          bank_name: this.payment.bank_name,
        })
        .subscribe(
          (data) => {
            console.log(data.data);
            this.isSubmited = true;
          },
          (error) => {
            if (error.status == 401) {
              window.jQuery('.login-btn').click();
            } else {
              alert(error.error.message);
            }
          }
        );
    }
  }
}
