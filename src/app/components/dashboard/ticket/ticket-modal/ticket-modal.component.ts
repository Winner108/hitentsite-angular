import { Component, Input, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css'],
})
export class TicketModalComponent implements OnInit {
  ticket: any;
  status: any;
  payment: any;
  isSubmited: boolean = true;
  constructor(
    private readonly api: ApiService,
    public dialogRef: MatDialogRef<TicketModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.status = {
      msg: '',
      msgType: '',
    };
    this.payment = {
      state: '1',
      message: '',
      ticket_id:0
    };
  }

  ngOnInit(): void {
    if (this.data.id > 0) {
      this.api.getticket(this.data.id).subscribe(
        (data) => {
          this.ticket = data.data;
        },
        (error) => {
          this.status.msg = error.error.message;
          this.status.msgType = 'error';
        }
      );
    }
  }

  onSubmit(): void {
    this.payment.ticket_id=this.data.id;
    this.api.ticket(this.payment).subscribe(
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
