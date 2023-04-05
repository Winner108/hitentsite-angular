import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/common/globals';
import { GameVirtual } from 'src/app/models/game-virtual';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  public data: GameVirtual[] | undefined = [];
  public static: string = environment.static;
  gameDisplayWay: string = '1';
  isLoading: boolean = true;
  constructor(private readonly api: ApiService, private router: Router) { 
    this.getGamesWithProvider();
  }

  ngOnInit(): void {

  }

  public getGamesWithProvider():void {
    this.api.gamesVirtual(Globals.TYPE_VIRTUAL).subscribe(data => {
      this.data = data.data;
      this.isLoading = false;
    }, error => {
      console.log(error.error.message);
    })
  }

  playGame(id: number | undefined, name: string | undefined): void {

    var user = sessionStorage.getItem("currentUser");
    if(user == "null" || user == null)
    {
      // this.router.navigate(['/authentication/signin'])
      window.jQuery(".login-btn").click();
      return;
    }

    if(this.gameDisplayWay == '1')
    {
      this.router.navigate(['/games/playgame/virtuals/' + id])
      return;
    }
    this.api.game(id).subscribe(data => {
      window.open(String(data.data?.url), name, "height=700,width=700");
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
