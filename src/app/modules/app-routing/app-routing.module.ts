import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';

import { AppMasterGuard } from '../../guards/app-master.guard';
import { GamesComponent } from 'src/app/components/games/games.component';
import { LiveCasinoComponent } from 'src/app/components/games/live-casino/live-casino.component';
import { CasinoComponent } from 'src/app/components/games/casino/casino.component';
import { BingoComponent } from 'src/app/components/games/bingo/bingo.component';
import { StaticContentComponent } from 'src/app/components/static-content/static-content.component';
import { AuthenticationComponent } from 'src/app/components/authentication/authentication.component';
import { SignupComponent } from 'src/app/components/authentication/signup/signup.component';
import { ForgotPasswordComponent } from 'src/app/components/authentication/forgot-password/forgot-password.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { DepositMoneyComponent } from 'src/app/components/dashboard/deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from 'src/app/components/dashboard/withdraw-money/withdraw-money.component';
import { TransferComponent } from 'src/app/components/dashboard/transfer/transfer.component';
import { PromotionsComponent } from 'src/app/components/dashboard/promotions/promotions.component';
import { BetHistoryComponent } from 'src/app/components/dashboard/bet-history/bet-history.component';
import { BonusActivitiesComponent } from 'src/app/components/dashboard/bonus-activities/bonus-activities.component';
import { CasinoProHistoryComponent } from 'src/app/components/dashboard/casino-pro-history/casino-pro-history.component';
import { FreeSpinComponent } from 'src/app/components/dashboard/free-spin/free-spin.component';
import { FinancialTransactionsComponent } from 'src/app/components/dashboard/financial-transactions/financial-transactions.component';
import { PersonalAndAccountDetailComponent } from 'src/app/components/dashboard/personal-and-account-detail/personal-and-account-detail.component';
import { ChangePasswordComponent } from 'src/app/components/dashboard/change-password/change-password.component';
import { LimitSettingsComponent } from 'src/app/components/dashboard/limit-settings/limit-settings.component';
import { UserSettingsComponent } from 'src/app/components/dashboard/user-settings/user-settings.component';
import { UserSecurityComponent } from 'src/app/components/dashboard/user-security/user-security.component';
import { LobbyComponent } from 'src/app/components/games/lobby/lobby.component';
import { VirtualComponent } from 'src/app/components/games/virtual/virtual.component';
import { SpecialComponent } from 'src/app/components/games/special/special.component';
import { PlayComponent } from 'src/app/components/games/play/play.component';
import { BankComponent } from 'src/app/components/dashboard/bank/bank.component';
import { TicketComponent } from 'src/app/components/dashboard/ticket/ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games', component: GamesComponent, children: [
    { path: 'livecasino', component: LiveCasinoComponent, canActivate: [AppMasterGuard] },
    { path: 'casino', component: CasinoComponent, canActivate: [AppMasterGuard] },
    { path: 'virtuals', component: VirtualComponent, canActivate: [AppMasterGuard] },
    { path: 'special', component: SpecialComponent, canActivate: [AppMasterGuard] },
    { path: 'lobby', component: LobbyComponent, canActivate: [AppMasterGuard]},
    { path: 'bingo', component: BingoComponent, canActivate: [AppMasterGuard] },
    { path: 'playgame/:type/:id', component: PlayComponent, canActivate: [AppMasterGuard] }
  ]},
  { path: 'home', component: HomeComponent, canActivate: [AppMasterGuard] },
  { path: 'contents/:page_name', component: StaticContentComponent, canActivate: [AppMasterGuard] },
  { path: 'authentication', component: AuthenticationComponent, children: [
    { path: 'signup', component: SignupComponent, canActivate: [AppMasterGuard]},
    { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AppMasterGuard]}
  ] },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'payments/deposit-money', component: DepositMoneyComponent, canActivate: [AppMasterGuard]},
    { path: 'payments/withdraw-money', component: WithdrawMoneyComponent, canActivate: [AppMasterGuard]},
    { path: 'payments/transfer', component: TransferComponent, canActivate: [AppMasterGuard]},
    { path: 'payments/promotions', component: PromotionsComponent, canActivate: [AppMasterGuard]},
    { path: 'account-activity/bet-history', component: BetHistoryComponent, canActivate: [AppMasterGuard]},
    { path: 'account-activity/bonus-activities', component: BonusActivitiesComponent, canActivate: [AppMasterGuard]},
    { path: 'account-activity/casino-pro-history', component: CasinoProHistoryComponent, canActivate: [AppMasterGuard]},
    { path: 'account-activity/free-spin', component: FreeSpinComponent, canActivate: [AppMasterGuard]},
    { path: 'account-activity/financial-transactions', component: FinancialTransactionsComponent, canActivate: [AppMasterGuard]},
    { path: 'user-info/personal-and-account-detail', component: PersonalAndAccountDetailComponent, canActivate: [AppMasterGuard]},
    { path: 'user-info/change-password', component: ChangePasswordComponent, canActivate: [AppMasterGuard]},
    { path: 'user-info/limit-settings', component: LimitSettingsComponent, canActivate: [AppMasterGuard]},
    { path: 'user-info/user-settings', component: UserSettingsComponent, canActivate: [AppMasterGuard]},
    { path: 'user-info/user-security', component: UserSecurityComponent, canActivate: [AppMasterGuard]},
    { path: 'banks', component: BankComponent, canActivate: [AppMasterGuard]},
    { path: 'tickets', component: TicketComponent, canActivate: [AppMasterGuard]},
  ] },

  { path: 'login', component: LoginComponent, canActivate: [AppMasterGuard] },
  {
      path: '**',
      redirectTo: '/home',
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
