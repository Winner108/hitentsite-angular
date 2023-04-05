import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bubble-validator',
  templateUrl: './bubble-validator.component.html',
  styleUrls: ['./bubble-validator.component.css']
})
export class BubbleValidatorComponent implements OnInit {
  @Input() password: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  checkNumber(): boolean {
    var result = /\d/.test(this.password);
    return result;
  }

  checkUpperCase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  checkLowerCase(): boolean {
    return /[a-z]/.test(this.password);
  }
}
