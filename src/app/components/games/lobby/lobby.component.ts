import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Lobby } from 'src/app/models/lobby';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  public lobby: Lobby | undefined;
  isLoading: boolean = true;
  displayIFrame:boolean=false;
  status: any;
  iFrameUrl: SafeResourceUrl | undefined;
  constructor(private readonly api: ApiService,

    private sanitizer: DomSanitizer,
    private router: Router) {
      this.status = {
        msg: '',
        msgType: ''
      }
    this.getLobbyGame();
  }

  ngOnInit(): void {
  }

  getLobbyGame(): void {
    var user = sessionStorage.getItem("currentUser");
    if(user == "null" || user == null)
    {
      this.status.msg = "Oyuna girmek için giriş Yapınız.";
      this.status.msgType = "info";
    }
    else
    {

    this.api.gameLobby().subscribe(data => {
      this.lobby = data.data;
      this.isLoading = false;
      this.iFrameUrl= this.sanitizer.bypassSecurityTrustResourceUrl(String(this.lobby?.url));
      this.displayIFrame=true;
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
  }


  createURL(): SafeResourceUrl {
    return  this.sanitizer.bypassSecurityTrustResourceUrl(String(this.lobby?.url));
  }
}
