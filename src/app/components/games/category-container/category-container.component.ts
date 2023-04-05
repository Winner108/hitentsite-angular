import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GameCategory } from 'src/app/models/game-category';


@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.css']
})
export class CategoryContainerComponent implements OnInit {
  @Input() categories: GameCategory[] | undefined = [];
  @Output() category = new EventEmitter<GameCategory | undefined>();
  currentId: any = 0;
  constructor() { 
     
  }

  ngOnInit(): void {
  }

  filter(category: GameCategory | undefined): void {
    this.currentId = category?.id;
    this.category.emit(category);
  }
}
