import { Renderer2, Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GameBingo } from 'src/app/models/game-bingo';
import { ApiService } from 'src/app/services/api.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {
  bingo: string = "";
  isLoading: boolean = true;
  status: any;
  constructor(private readonly api: ApiService,

    private sanitizer: DomSanitizer,
    private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document) {
          this.status = {
            msg: '',
            msgType: ''
          }

        }

  ngOnInit(): void {

    this.getBingoGame();
  }

  setGamePanel(): void {
    let script = this._renderer2.createElement('script');
    script.type = 'text/javascript';
    script.text = `(function (l, i, v, e, t, c, h) {
      l['LGFrameObject'] = t;
      l[t] = l[t] || function () {
        (l[t].q = l[t].q || []).push(arguments)
      },
        l[t].l = 1 * new Date();
      c = i.createElement(v), h = i.getElementsByTagName(v)[0];
      c.async = 1;
      c.src = e;
      h.parentNode.insertBefore(c, h)
    })(window, document, 'script', ('//static.lgio.net/lg-f.js?v=' + (Date.now())), 'lgf');
    lgf('config', {
      container: 'lgf-container', //id of html frame container element #:required
      origin: '', //frame top parent site origin url (default: document.referrer) (required for fullscreen)
      params: { // for all additional parameters
        sign: '${this.bingo}', // #:required
        homepage: '', //
        cashierUrl: '', //
        room: '' //
      }
    });`;
    this._renderer2.appendChild(this._document.body, script);
  }

  getBingoGame(): void {
    var user = sessionStorage.getItem("currentUser");
    if(user == "null" || user == null)
    {
      this.status.msg = "Oyuna girmek için giriş Yapınız.";
      this.status.msgType = "info";
    }
    else
    {

    this.api.gameBingo().subscribe(data => {
      this.bingo = String(data.data?.token);
      this.setGamePanel();
      this.isLoading = false;
    }, error => {
      this.status.msg = error.error.message;
                this.status.msgType = "error";
    })
  }
}

  createURL(): SafeResourceUrl {
    return  this.sanitizer.bypassSecurityTrustResourceUrl(`https://lobby.lgio.net/?sign=${this.bingo}&origin=http://136.243.169.181`);
  }
}
