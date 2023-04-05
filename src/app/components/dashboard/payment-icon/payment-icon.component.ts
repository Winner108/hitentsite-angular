import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'payment-icon',
  templateUrl: './payment-icon.component.html',
  styleUrls: ['./payment-icon.component.css']
})
export class PaymentIconComponent implements OnInit {
  @Input() bank: string | undefined = "";
  @Input() type = "";
  server: string = environment.server;
  constructor() { }

  ngOnInit(): void {
  }

}
