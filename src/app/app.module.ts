import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientXsrfModule
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { StaticInnerContentComponent } from './components/static-inner-content/static-inner-content.component';
import { LanguageComponent } from './components/language/language.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { MiniGamesComponent } from './components/mini-games/mini-games.component';
import { TcknVerificationComponent } from './components/tckn-verification/tckn-verification.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { SliderComponent } from './components/slider/slider.component';
import { PopularGamesComponent } from './components/popular-games/popular-games.component';
import { PaymentsWidgetComponent } from './components/payments-widget/payments-widget.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LiveCasinoComponent } from './components/games/live-casino/live-casino.component';
import { CasinoComponent } from './components/games/casino/casino.component';
import { CategoryContainerComponent } from './components/games/category-container/category-container.component';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
import { UserFavoriteComponent } from './components/user-favorite/user-favorite.component';
import { BingoComponent } from './components/games/bingo/bingo.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { StaticContentComponent } from './components/static-content/static-content.component';
import { GamesComponent } from './components/games/games.component';
import { TvGamesComponent } from './components/games/tv-games/tv-games.component';
import { BetongamesComponent } from './components/games/betongames/betongames.component';
import { VirtualComponent } from './components/games/virtual/virtual.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { BirthdateInputComponent } from './components/authentication/birthdate-input/birthdate-input.component';
import { PasswordEyeComponent } from './components/authentication/password-eye/password-eye.component';
import { BubbleValidatorComponent } from './components/bubble-validator/bubble-validator.component';
import { FieldMessagesComponent } from './components/field-messages/field-messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { BalanceComponent } from './components/header/balance/balance.component';
import { MessagesComponent } from './components/header/messages/messages.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransferComponent } from './components/dashboard/transfer/transfer.component';
import { ExchangeCalculatorComponent } from './components/dashboard/exchange-calculator/exchange-calculator.component';
import { DepositMoneyComponent } from './components/dashboard/deposit-money/deposit-money.component';
import { DepositWithdrawMoneyComponent } from './components/dashboard/deposit-withdraw-money/deposit-withdraw-money.component';
import { PaymentIconComponent } from './components/dashboard/payment-icon/payment-icon.component';
import { WithdrawMoneyComponent } from './components/dashboard/withdraw-money/withdraw-money.component';
import { PromotionsComponent } from './components/dashboard/promotions/promotions.component';
import { BetHistoryComponent } from './components/dashboard/bet-history/bet-history.component';
import { CashoutPromitComponent } from './components/dashboard/cashout-promit/cashout-promit.component';
import { PaginatorComponent } from './components/dashboard/paginator/paginator.component';
import { BonusActivitiesComponent } from './components/dashboard/bonus-activities/bonus-activities.component';
import { CasinoProHistoryComponent } from './components/dashboard/casino-pro-history/casino-pro-history.component';
import { FreeSpinComponent } from './components/dashboard/free-spin/free-spin.component';
import { FinancialTransactionsComponent } from './components/dashboard/financial-transactions/financial-transactions.component';
import { PersonalAndAccountDetailComponent } from './components/dashboard/personal-and-account-detail/personal-and-account-detail.component';
import { PhoneVerifyComponent } from './components/dashboard/phone-verify/phone-verify.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { LimitSettingsComponent } from './components/dashboard/limit-settings/limit-settings.component';
import { UserSettingsComponent } from './components/dashboard/user-settings/user-settings.component';
import { UserSecurityComponent } from './components/dashboard/user-security/user-security.component';
import { BankComponent } from './components/dashboard/bank/bank.component';



import { environment } from 'src/environments/environment';
import { LobbyComponent } from './components/games/lobby/lobby.component';
import { DepositWithdrawModalComponent } from './components/dashboard/deposit-withdraw-money/deposit-withdraw-modal/deposit-withdraw-modal.component';
import { WithdrawModalComponent } from './components/dashboard/deposit-withdraw-money/withdraw-modal/withdraw-modal.component';
import { SpecialComponent } from './components/games/special/special.component';
import { PlayComponent } from './components/games/play/play.component';
import { StaticContentModalComponent } from './components/static-content/static-content-modal/static-content-modal.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';

import { NgxMaskModule,IConfig } from 'ngx-mask';
import { BankModalComponent } from './components/dashboard/bank/bank-modal/bank-modal.component';
import { TicketModalComponent } from './components/dashboard/ticket/ticket-modal/ticket-modal.component';
import { TicketComponent } from './components/dashboard/ticket/ticket.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, `${environment.server}/api/translation/`, '');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SocialLinksComponent,
    StaticInnerContentComponent,
    LanguageComponent,
    FooterComponent,
    SpecialEventsComponent,
    MiniGamesComponent,
    TcknVerificationComponent,
    SidebarRightComponent,
    SliderComponent,
    PopularGamesComponent,
    PaymentsWidgetComponent,
    SearchBarComponent,
    LiveCasinoComponent,
    CasinoComponent,
    CategoryContainerComponent,
    HorizontalScrollComponent,
    UserFavoriteComponent,
    BingoComponent,
    MessageBoxComponent,
    StaticContentComponent,
    GamesComponent,
    TvGamesComponent,
    BetongamesComponent,
    AuthenticationComponent,
    SignupComponent,
    BirthdateInputComponent,
    PasswordEyeComponent,
    BubbleValidatorComponent,
    FieldMessagesComponent,
    NotificationsComponent,
    BalanceComponent,
    MessagesComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    TransferComponent,
    ExchangeCalculatorComponent,
    DepositMoneyComponent,
    DepositWithdrawMoneyComponent,
    PaymentIconComponent,
    WithdrawMoneyComponent,
    PromotionsComponent,
    BetHistoryComponent,
    CashoutPromitComponent,
    PaginatorComponent,
    BonusActivitiesComponent,
    CasinoProHistoryComponent,
    FreeSpinComponent,
    FinancialTransactionsComponent,
    PersonalAndAccountDetailComponent,
    PhoneVerifyComponent,
    ChangePasswordComponent,
    LimitSettingsComponent,
    UserSettingsComponent,
    UserSecurityComponent,
    LobbyComponent,
    VirtualComponent,
    SpecialComponent,
    PlayComponent,
    StaticContentModalComponent,
    LoadingScreenComponent,
    LoadingBarComponent,
    DepositWithdrawModalComponent,
    WithdrawModalComponent,
    BankComponent,
    BankModalComponent,
    TicketModalComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
    }),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatDialogModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
      this.translate.addLangs(['en', 'tr']);
      this.translate.setDefaultLang('tr');

      if (sessionStorage.hasOwnProperty('language') && sessionStorage.getItem('language') != 'null') {
          this.translate.use(String(sessionStorage.getItem('language')));
      } else {
          var language = (navigator.language || window.navigator.language || 'tr').split('-')[0];
          this.translate.use(language);
          sessionStorage.setItem('language', language);
      }
  }
}
