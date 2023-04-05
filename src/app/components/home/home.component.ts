import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {DomSanitizer} from '@angular/platform-browser';
import { BottomBanner } from 'src/app/models/bottom-banner';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paymentBanners: BottomBanner[] | undefined;
  bottomBanners: BottomBanner[] | undefined;
  server: string = environment.server;
  constructor(private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadSlider();
    this.getBottomBanner();
    this.getPaymentBanner();
  }

  getPaymentBanner(): void {
    this.api.paymentBanners().subscribe(data => {
      this.paymentBanners = data.data;
    }, error => {
      alert(error.error.message);
    })
  }

  getBottomBanner(): void {
    this.api.bottomBanners().subscribe(data => {
      this.bottomBanners = data.data;
    }, error => {
      alert(error.error.message);
    })
  }

  loadSlider(): void {
    this.api.slider().subscribe(data => {
      var slideData: { img: string | undefined; alt: string | undefined; href: string | undefined; status: string; type: string; linkType: string; }[] = [];
      data.data?.map(item => {
        slideData.push({
          "img":this.server +'/'+ item.image,
          "alt":item.title,
          "href":item.url,
          "status":(item.is_active ? "active" : "inactive"),
          "type":(item.type == 1 ? "img" : ""),
          "linkType":"internal"
        })
      })
      console.log(slideData)
      window.loadSlider(slideData);
    }, error => {
      console.log(error.error.message);
    })
  }
}
