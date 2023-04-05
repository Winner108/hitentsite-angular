import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {
  id: string = '';
  type: string = '';
  url: string = '';
  name: string = '';
  isFullScreen: boolean = false;
  displayIFrame:boolean=false;
  status: any;
  iFrameUrl: SafeResourceUrl | undefined;
  constructor(private readonly api: ApiService,
              private router: Router,
              private readonly activatedRouter: ActivatedRoute,
              private sanitizer: DomSanitizer) {
                this.status = {
                  msg: '',
                  msgType: ''
                }
    this.activatedRouter.paramMap.subscribe(params => {
      this.id = String(params.get('id'));
      this.type = String(params.get('type'));
      this.init();
    });
  }

  ngOnInit(): void {
  }

  init(): void {

    this.api.game(Number(this.id)).subscribe(data => {

      this.url = String(data.data?.url);
      this.name = String(data.data?.name);
      this.iFrameUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      this.displayIFrame=true;

    }, error => {
      if(error.status == 401)
      {
        // this.router.navigate(['/authentication/signin'])
        window.jQuery(".login-btn").click();
      }
      else {
        this.status.msg = error.error.message;
        this.status.msgType = "error";
    }
    })
  }

  createSafeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(String(this.url));
  }

  public refresh(): void {
    this.init();
  }
}
