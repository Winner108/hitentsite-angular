import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.css']
})
export class PopularGamesComponent implements OnInit {
  static: string = environment.static;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 3
      },
      740: {
        items: 7
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
