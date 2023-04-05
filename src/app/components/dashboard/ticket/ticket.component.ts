import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bank } from 'src/app/models/bank';
import { Ticket } from 'src/app/models/ticket';
import { ApiService } from 'src/app/services/api.service';
import { TicketModalComponent } from './ticket-modal/ticket-modal.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

  export class TicketComponent implements OnInit {
    public tickets: Ticket[] | undefined = [];
    constructor(private readonly api: ApiService, public dialog: MatDialog) {}

    ngOnInit() {
      this.api.tickets().subscribe(
        (data) => {
          this.tickets = data.data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    detail(id: number | undefined): void {

      const dialogRef = this.dialog.open(TicketModalComponent, {
        id: 'ticket-modal',
        data: { id: id },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(TicketModalComponent, {
        id: 'ticket-modal',
        data: { id: 0 },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
  }
