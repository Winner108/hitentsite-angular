import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tv-games',
  templateUrl: './tv-games.component.html',
  styleUrls: ['./tv-games.component.css']
})
export class TvGamesComponent implements OnInit {
  static: string = environment.static;
  constructor() { }

  ngOnInit(): void {
  }

}
