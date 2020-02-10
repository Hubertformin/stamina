import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './client/home/home.component';
import {SchedulerComponent} from './client/scheduler/scheduler.component';
import {LoginComponent} from './login/login.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {PrivacyPolicyComponent} from './client/privacy-policy/privacy-policy.component';
import {TermsConditionsComponent} from './client/terms-conditions/terms-conditions.component';
import {PageNotFoundComponent} from './client/page-not-found/page-not-found.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {path: '', redirectTo: 'schedule', pathMatch: 'full'},
      {path: 'schedule', component: SchedulerComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms-and-conditions', component: TermsConditionsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
