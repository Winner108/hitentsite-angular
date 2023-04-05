import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { ApiResponse } from '../models/response';
import { HomePageSectionData } from '../models/homepagesectiondata';
import { User } from '../models/user';
import { Balance } from '../models/balance';
import { GameCategory } from '../models/game-category';
import { GameProvider } from '../models/game-provider';
import { Game } from '../models/game';
import { GameLink } from '../models/game-link';
import { GameBingo } from '../models/game-bingo';
import { Promotion } from '../models/promotion';
import { Lobby } from '../models/lobby';
import { Profile } from '../models/profile';
import { BottomBanner } from '../models/bottom-banner';
import { PaymentType } from '../models/payment-type';
import { Setting } from '../models/setting';
import { GameList } from '../models/game-list';
import { GameVirtual } from '../models/game-virtual';
import { GameSpecial } from '../models/game-special';
import { PageContent } from '../models/page-content';
import { SliderItem } from '../models/slider-item';
import { Transaction } from '../models/transaction';
import { Bank } from '../models/bank';
import { Ticket } from '../models/ticket';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private options = {};
    private lang: string | null = '';
    constructor(private readonly httpClient: HttpClient) {
        this.setOption(false);
    }

    private setOption(token: any): void {
        this.lang = sessionStorage.getItem('language');
        if(this.lang == null)
        {
            this.lang = 'tr';
        }
        var headerInfo = {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': '',
            'Accept-Language': this.lang
        }

        if(token)
        {
            headerInfo['Authorization'] = "Bearer " + token;
        }
        else
        {
            var user = sessionStorage.getItem('currentUser');
            if(user != 'null' && user != null)
            {
                var token = JSON.parse(user).token;
                headerInfo['Authorization'] = "Bearer " + token;
            }
        }

        const headers = new HttpHeaders(headerInfo);
        this.options = { headers: headers };
    }

    public getHomePageLiveCasino(): Observable<ApiResponse<HomePageSectionData[]>> {
        return this.httpClient.get<ApiResponse<HomePageSectionData[]>>(`${environment.server}/api/content/banner/desktop_homepage_livecasino`, this.options);
    }

    public getHomePageCasino(): Observable<ApiResponse<HomePageSectionData[]>> {
        return this.httpClient.get<ApiResponse<HomePageSectionData[]>>(`${environment.server}/api/content/banner/desktop_homepage_casino`, this.options);
    }

    public getHomePageMiniGames(): Observable<ApiResponse<HomePageSectionData[]>> {
        return this.httpClient.get<ApiResponse<HomePageSectionData[]>>(`${environment.server}/api/content/banner/desktop_home_page_minigames`, this.options);
    }

    public getHomePagePayments(): Observable<ApiResponse<HomePageSectionData[]>> {
        return this.httpClient.get<ApiResponse<HomePageSectionData[]>>(`${environment.server}/api/content/banner/desktop_homepage_payments`, this.options);
    }

    public login(username: String, password: String): Observable<ApiResponse<User>> {
        return this.httpClient.post<ApiResponse<User>>(`${environment.server}/api/auth/login`, {username, password}, this.options);
    }

    public forgotPassword(val: any): Observable<ApiResponse<any>> {
        return this.httpClient.post<ApiResponse<any>>(`${environment.server}/api/auth/forgotpassword`, val, this.options);
    }

    public register(info: any): Observable<ApiResponse<User>> {
        return this.httpClient.post<ApiResponse<User>>(`${environment.server}/api/auth/register`, info, this.options);
    }
    public validusername(info: any): Observable<ApiResponse<User>> {
      return this.httpClient.post<ApiResponse<User>>(`${environment.server}/api/auth/validation/username`, info, this.options);
  }

    public changePassword(info: any): Observable<ApiResponse<any>> {
        return this.httpClient.post<ApiResponse<any>>(`${environment.server}/api/account/password/change`, info, this.options);
    }

    public balance(): Observable<ApiResponse<Balance>> {
        return this.httpClient.get<ApiResponse<Balance>>(`${environment.server}/api/account/balance`, this.options);
    }

    public gameCategory(type: number): Observable<ApiResponse<GameCategory[]>> {
        return this.httpClient.get<ApiResponse<GameCategory[]>>(`${environment.server}/api/game/category/${type}`, this.options);
    }

    public gameProvider(type: number): Observable<ApiResponse<GameProvider[]>> {
        return this.httpClient.get<ApiResponse<GameProvider[]>>(`${environment.server}/api/game/provider/${type}`, this.options);
    }

    public games(type: number, params: any): Observable<ApiResponse<GameList>> {
        var urlParams = "";
        if(params)
        {
            urlParams = "?";
            for(let key in params)
            {
                urlParams += (urlParams == "?" ? "" : "&") + key + "=" + params[key];
            }
        }
        return this.httpClient.get<ApiResponse<GameList>>(`${environment.server}/api/game/list/${type}${urlParams}`, this.options);
    }

    public game(id: number | undefined): Observable<ApiResponse<GameLink>> {
        return this.httpClient.get<ApiResponse<GameLink>>(`${environment.server}/api/game/lobby/${id}`, this.options);
    }

    public gameBingo(): Observable<ApiResponse<GameBingo>> {
        return this.httpClient.get<ApiResponse<GameBingo>>(`${environment.server}/api/game/lobby/bingo`, this.options);
    }

    public gameLobby(): Observable<ApiResponse<Lobby>> {
        return this.httpClient.get<ApiResponse<Lobby>>(`${environment.server}/api/game/lobby/live_games`, this.options);
    }

    public gamesVirtual(type: number): Observable<ApiResponse<GameVirtual[]>> {
        return this.httpClient.get<ApiResponse<GameVirtual[]>>(`${environment.server}/api/game/provider/${type}?with=games`, this.options);
    }

    public gamesSpecial(): Observable<ApiResponse<GameSpecial[]>> {
        return this.httpClient.get<ApiResponse<GameSpecial[]>>(`${environment.server}/api/game/special`, this.options);
    }

    public promotions(): Observable<ApiResponse<Promotion[]>> {
        return this.httpClient.get<ApiResponse<Promotion[]>>(`${environment.server}/api/content/promotion`, this.options);
    }

    public pageContent(ind: number):  Observable<ApiResponse<PageContent>> {
        return this.httpClient.get<ApiResponse<PageContent>>(`${environment.server}/api/content/page/${ind}`, this.options);
    }
    public pageContentBySlug(slug: string):  Observable<ApiResponse<PageContent>> {
      return this.httpClient.get<ApiResponse<PageContent>>(`${environment.server}/api/content/page/${slug}`, this.options);
  }

    public profile(token: any): Observable<ApiResponse<Profile>> {
        if(token)
        {
            this.setOption(token);
        }
        return this.httpClient.get<ApiResponse<Profile>>(`${environment.server}/api/account/me`, this.options);
    }

    public deposit(info: any): Observable<ApiResponse<any>> {
        return this.httpClient.post<ApiResponse<any>>(`${environment.server}/api/account/deposit`, info, this.options);
    }

    public withdraw(info: any): Observable<ApiResponse<any>> {
        return this.httpClient.post<ApiResponse<any>>(`${environment.server}/api/account/withdraw`, info, this.options);
    }
    public withdrawService(type: string | undefined): Observable<ApiResponse<any>> {
      return this.httpClient.get<ApiResponse<any>>(`${environment.server}/api/account/withdraw/service/${type}`, this.options);
  }
    public bank(info: any): Observable<ApiResponse<any>> {
      return this.httpClient.post<ApiResponse<any>>(`${environment.server}/api/account/bank`, info, this.options);
    }
    public getbank(): Observable<ApiResponse<Bank[]>> {
        return this.httpClient.get<ApiResponse<Bank[]>>(`${environment.server}/api/account/bank`, this.options);
    }
    public deletebank(id:number| undefined): Observable<ApiResponse<any>> {
      return this.httpClient.put<ApiResponse<any>>(`${environment.server}/api/account/bank/${id}`,[], this.options);
    }
    public tickets(): Observable<ApiResponse<Ticket[]>> {
      return this.httpClient.get<ApiResponse<Ticket[]>>(`${environment.server}/api/account/ticket`, this.options);
    }
    public ticket(info: any): Observable<ApiResponse<any>> {
      return this.httpClient.post<ApiResponse<any>>(`${environment.server}/api/account/ticket`, info, this.options);
    }
    public getticket(id:number| undefined): Observable<ApiResponse<any>> {
      return this.httpClient.get<ApiResponse<any>>(`${environment.server}/api/account/ticket/${id}`, this.options);
    }
    public bottomBanners(): Observable<ApiResponse<BottomBanner[]>> {
        return this.httpClient.get<ApiResponse<BottomBanner[]>>(`${environment.server}/api/content/banner/homepage_bottom_banners`, this.options);
    }

    public paymentBanners(): Observable<ApiResponse<BottomBanner[]>> {
        return this.httpClient.get<ApiResponse<BottomBanner[]>>(`${environment.server}/api/content/banner/homepage_payments`, this.options);
    }

    public depositType(): Observable<ApiResponse<PaymentType[]>> {
        return this.httpClient.get<ApiResponse<PaymentType[]>>(`${environment.server}/api/account/deposit`, this.options);
    }

    public withdrawType(): Observable<ApiResponse<PaymentType[]>> {
        return this.httpClient.get<ApiResponse<PaymentType[]>>(`${environment.server}/api/account/withdraw`, this.options);
    }

    public setting(): Observable<ApiResponse<Setting>> {
        return this.httpClient.get<ApiResponse<Setting>> (`${environment.server}/api/content/setting`, this.options);
    }

    public slider(): Observable<ApiResponse<SliderItem[]>> {
        return this.httpClient.get<ApiResponse<SliderItem[]>> (`${environment.server}/api/content/banner/homepage_slider`, this.options);
    }

    public transactionHistories(from: string, to: string, page: number,status: string,): Observable<ApiResponse<Transaction>> {
        var condition: any = {dateBegin: from, dateEnd: to,status:status};
        if(from == "" && to == "")
        {
            condition = {};
        }
        else if(from == "")
        {
            condition = {dateEnd: to};
        }
        else if(to == "")
        {
            condition = {dateBegin: from};
        }
        return this.httpClient.post<ApiResponse<Transaction>> (`${environment.server}/api/account/history?page=${page}`, condition, this.options);
    }
// /api/content/notification/{place}
// /api/content/banner/{place}
// /api/content/banner/homepage_payments
// /api/content/banner/homepage_bottom_banners
}
