import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-messages',
  templateUrl: './field-messages.component.html',
  styleUrls: ['./field-messages.component.css']
})
export class FieldMessagesComponent implements OnInit {
  @Input() content: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
