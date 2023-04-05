import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mini-games',
  templateUrl: './mini-games.component.html',
  styleUrls: ['./mini-games.component.css']
})
export class MiniGamesComponent implements OnInit {
  static: string = environment.static;
  constructor() { }

  ngOnInit(): void {
  }

}
