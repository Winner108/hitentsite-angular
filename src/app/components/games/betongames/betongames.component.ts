import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-betongames',
  templateUrl: './betongames.component.html',
  styleUrls: ['./betongames.component.css']
})
export class BetongamesComponent implements OnInit {
  static: string = environment.static;
  constructor() { }

  ngOnInit(): void {
  }

}
