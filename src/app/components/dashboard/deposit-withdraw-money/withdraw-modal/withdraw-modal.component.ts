import { Component, Input, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Bank } from 'src/app/models/bank';

@Component({
  selector: 'app-withdraw-modal',
  templateUrl: './withdraw-modal.component.html',
  styleUrls: ['./withdraw-modal.component.css'],
})
export class WithdrawModalComponent implements OnInit {
  form_type: number = 0;
  status: any;
  payment: any;
  @Input() type: string | undefined;
  amount: string = '';
  paymentType: string = '';
  bank_name: string = '';
  isSubmited: boolean = false;
  public banks: Bank[] | undefined = [];
  public banks1: any | undefined = [];
  constructor(
    private readonly api: ApiService,
    public dialogRef: MatDialogRef<WithdrawModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.status = {
      msg: '',
      msgType: '',
    };
    this.payment = {
      amount: '',
      paymentType: '',
      bank_id: '',
      data: {
        bank_name: '',
        ibanno: '',
        sube_kodu: '',
        account_no: '',
        tc_no: '',
        bir_yakini_tc_no: '',
        dogum_tarihi: '',
        kimlik_verilis_son_kulanma_tarihi: '',
      },
    };
  }

  ngOnInit(): void {
    if (this.data.bank == 'bank-transfer' || this.data.bank == 'papara') {
      this.api.getbank().subscribe(
        (data) => {
          if (this.data.bank == 'bank-transfer')
            this.banks = data.data?.filter((p) => p.type == 1);
          else this.banks = data.data?.filter((p) => p.type == 2);
          this.payment.bank_id = '0';
        },
        (error) => {
          console.log(error);
        }
      );
    }
    if (this.data.bank == 'maksibanktransfer') {
      this.api.withdrawService("maksibanktransferBankList").subscribe(
        (data) => {

          this.banks1 = data.data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    if (this.data.bank == 'maksicrypto') {
      this.api.withdrawService("maksicryptoCryptoList").subscribe(
        (data) => {

          this.banks1 = data.data;
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }

  onSubmit(): void {
    this.payment.id = this.data.id;
    if(this.payment.data.ibanno != null)
    this.payment.data.ibanno='TR'+this.payment.data.ibanno;
    this.api.withdraw(this.payment).subscribe(
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
