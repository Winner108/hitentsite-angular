import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSpecial } from 'src/app/models/game-special';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  games: GameSpecial[] | undefined;
  server: string = environment.server;
  static: string = environment.static;
  gameDisplayWay: string = '1';

  isLoading: boolean = true;
  constructor(private readonly api: ApiService, private router: Router) { 
    this.getGames();
  }

  ngOnInit(): void {
  }

  public getGames(): void {
    this.api.gamesSpecial().subscribe(data => {
      this.games = data.data;
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
      this.router.navigate(['/games/playgame/special/' + id])
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
