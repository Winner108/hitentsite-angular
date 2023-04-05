import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Lobby } from 'src/app/models/lobby';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-betgames-tv',
  templateUrl: './betgames-tv.component.html',
  styleUrls: ['./betgames-tv.component.css']
})
export class BetgamesTvComponent implements OnInit {

  public lobby: Lobby | undefined;
  isLogin: boolean = false;
  constructor(private readonly api: ApiService,
    private sanitizer: DomSanitizer,
    private router: Router) {
    this.getLobbyGame();
  }

  ngOnInit(): void {
  }

  getLobbyGame(): void {
    this.api.gameLobby().subscribe(data => {
      this.isLogin=true;
      this.lobby = data.data;

    }, error => {
      if(error.status == 401)
      {
        // this.router.navigate(['/authentication/signin'])
        window.jQuery(".login-btn").click();
      }
      else
      {
        alert(error.error.message);
      }
    })
  }


  createURL(): SafeResourceUrl {
    return  this.sanitizer.bypassSecurityTrustResourceUrl(String(this.lobby?.url));
  }
}
