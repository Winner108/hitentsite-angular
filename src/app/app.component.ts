import { Renderer2,Component, Inject, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from './services/api.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { DOCUMENT } from '@angular/common';

declare global { interface Window { loadSlider: any; jQuery: any; M: any } }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  htmlVariable:string|undefined;
  title = 'theme';
  public showOverlay: boolean = true;

  constructor(private readonly api: ApiService, private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) {
    api.setting().subscribe(data => {
      window.document.title = String(data.data?.meta_title);
      sessionStorage.setItem('settings', JSON.stringify(data.data));
      this.htmlVariable=String(data.data?.live_support_code);
    }, error => {
      console.log(error.error.message);
    })

    router.events.subscribe((event: RouterEvent) => {
    })

    window.addEventListener("load", (event) => {
      this.showOverlay = false;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }
}
