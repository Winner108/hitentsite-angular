import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/common/globals';
import { Game } from 'src/app/models/game';
import { GameCategory } from 'src/app/models/game-category';
import { GameProvider } from 'src/app/models/game-provider';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-casino',
  templateUrl: './live-casino.component.html',
  styleUrls: ['./live-casino.component.css']
})
export class LiveCasinoComponent implements OnInit {
  static: string = environment.static;
  isSearch: boolean = false;
  isFilter: boolean = false;
  category: GameCategory | undefined;
  categories: GameCategory[] | undefined = [];
  provider: GameProvider | undefined;
  providers: GameProvider[] | undefined = [];
  games: Game[] | undefined = [];
  gameCnt: number | undefined = 0;
  msg: any;
  msgType: any;
  search: any;
  orderByValue: string = "";
  isShowMoreButtonDisabled: boolean = false;
  isShowLessButtonDisabled: boolean = true;
  searchText: string = "";
  showProviders: boolean = true;
  isListView: boolean = false;
  gameDisplayWay: string = '1';

  isLoading: boolean = true;
  constructor(private readonly api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getProviders();
    this.getCategories();
    this.getGames();
    this.search = {page: 0, take: 20};
  }

  toggleFilter(): void {
    this.isFilter = !this.isFilter;
  }

  toggleSearch(): void {
    this.isSearch = !this.isSearch;
  }

  getCategories(): void {
    this.api.gameCategory(Globals.TYPE_LIVE_CASINO).subscribe(data => {
      this.categories = data.data;
      this.isLoading = false;
    }, error => {
      this.msg = error.error.message;
      this.msgType = "error";
    })
  }

  getProviders(): void {
    this.api.gameProvider(Globals.TYPE_LIVE_CASINO).subscribe(data => {
      this.providers = data.data;
      this.isLoading = false;
    }, error => {
      this.msg = error.error.message;
      this.msgType = "error";
    })
  }

  getGames(): void {
    this.api.games(Globals.TYPE_LIVE_CASINO, this.search).subscribe(data => {
      this.gameCnt = data.data?.count;
      (data.data?.list || []).map(game => this.games?.push(game));
      if(Number((data.data?.list || []).length) < 20) {
        this.isShowMoreButtonDisabled = true;
      }
      else {
        this.isShowMoreButtonDisabled = false;
      }
      this.isLoading = false;
    }, error => {
      this.msg = error.error.message;
      this.msgType = "error";
    })
  }

  showMore(): void {
    this.search.page ++;
    this.isShowLessButtonDisabled = false;
    this.getGames();
  }

  showLess(): void {
    this.search.page --;
    if(this.search.page == 0)
    {
      this.isShowLessButtonDisabled = true;
    }
    this.isShowMoreButtonDisabled = false;
    this.games = (this.games || []).slice(0, (this.games || []).length - 20);
  }

  filterByCategory(category: GameCategory | undefined): void {
    this.category = category;
    this.games = [];
    this.search.page = 0;
    this.search.category = category?.id;
    this.getGames();
  }

  filterByProvider(provider: GameProvider | undefined): void {
    this.provider = provider;
    this.games = [];
    this.search.page = 0;
    this.search.provider = provider?.id;
    this.getGames();
  }

  filterByText(): void {
    this.games = [];
    this.search.page = 0;
    this.search.search = this.searchText;
    this.getGames();
  }

  orderBy(): void {
    this.games = [];
    this.search.order = this.orderByValue;
    this.getGames();
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
      this.router.navigate(['/games/playgame/livecasino/' + id])
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

  updateGamePlayWay(val: string): void {
    this.gameDisplayWay = val;
  }
}
