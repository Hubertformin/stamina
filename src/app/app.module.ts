import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_GB } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en-GB';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './client/home/home.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './client/scheduler/scheduler.component';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ImgUrlPipe } from './pipes/img-url.pipe';
import {AuthServiceConfig, FacebookLoginProvider, LoginOpt, SocialLoginModule} from 'angularx-social-login';
import { PrivacyPolicyComponent } from './client/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './client/terms-conditions/terms-conditions.component';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';

registerLocaleData(en, 'en-GB');

const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages,instagram_basic',
  return_scopes: true,
  enable_profile_selector: true
};

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('144133606615649', fbLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SchedulerComponent,
    ImgUrlPipe,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireStorageModule,
    SharedModule,
    SocialLoginModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_GB },
    { provide: LOCALE_ID, useValue: 'en-GB' },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
