import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {AuthService, FacebookLoginProvider} from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(private afAuth: AngularFireAuth,
              private msg: NzMessageService,
              private router: Router,
              private authService: AuthService) { }
  /*
  * Get auth instance
  * */
  get authState() {
    return this.afAuth.authState;
  }
  /*
  * Sign in with facebook
  * */
  signInWithFB() {
    return this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
  /*
  * log out*/
  logOut() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
      }).catch(err => {
        console.error(err);
        this.msg.error(err.message);
    });
  }
  /*
  * social media signout
  * */
  socialSignOut(): void {
    this.authService.signOut();
  }
}
