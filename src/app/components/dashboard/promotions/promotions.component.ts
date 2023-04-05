import { Component, OnInit } from '@angular/core';
import { Promotion } from 'src/app/models/promotion';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotions: Promotion[] | undefined = [];
  isLoading: boolean = true;
  constructor(private readonly api: ApiService) { }

  ngOnInit(): void {
    this.getPromotions();
  }

  getPromotions(): void {
    this.api.promotions().subscribe(data => {
      this.promotions = data.data;
      this.isLoading = false;
    }, error => {
      alert(error.error.message);
    })
  }
}
