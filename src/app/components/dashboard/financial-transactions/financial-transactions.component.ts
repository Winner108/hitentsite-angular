import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-financial-transactions',
  templateUrl: './financial-transactions.component.html',
  styleUrls: ['./financial-transactions.component.css']
})
export class FinancialTransactionsComponent implements OnInit {
  status: string = "";
  dateStart: string = "";
  dateEnd: string = "";
  data: Transaction | undefined = new Transaction;
  currentPage: number = 1;
  pages: number[] = [];
  constructor(private readonly api: ApiService) {
    var now = new Date();
    var d = now.getDate();
    var m = now.getMonth() + 1;
    this.dateStart = (d > 9 ? d : '0'+d) + "." + (m > 9 ? m : '0' + m) + "." + now.getFullYear();
    this.dateEnd = this.dateStart;
    this.getTransaction();
  }

  ngOnInit(): void {
    var options = {
      maxDate: new Date(),
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
      selectMonths: true
    };
    var elems = document.querySelectorAll('.datepicker');
    window.M.Datepicker.init(elems, options);
  }

  getAllTransactionHistory(sd: string, ed: string): void{
    if(sd != "")
    {
      this.dateStart = sd.split(".")[2] +'-'+ sd.split(".")[1] +'-'+ sd.split(".")[0];
    }

    if(ed != "")
    {
      this.dateEnd = ed.split(".")[2] +'-'+ ed.split(".")[1] +'-'+ ed.split(".")[0];
    }
    this.getTransaction();
  }

  gotoPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getTransaction();
  }

  getTransaction(): void {
    this.api.transactionHistories(this.dateStart, this.dateEnd, this.currentPage,this.status).subscribe(data => {
      this.data = data.data;
      this.pages = [];
      if(this.data)
      {
        for(var i = 0;i < this.data.transactions.total;i += this.data.transactions.per_page)
        {
          this.pages.push((i / this.data.transactions.per_page) + 1);
        }
      }
    })
  }

  openStartPicker(): void {
    // var elems = window.jQuery("#transactionHistoryStartDatePicker");
    // var instances = window.M.Datepicker.init(elems);
    // console.log(instances)
  }

  openEndPicker(): void {
    // var elems = window.jQuery("#transactionHistoryEndDatePicker");
    // var instances = window.M.Datepicker.init(elems);
    // console.log(instances)
  }
}
