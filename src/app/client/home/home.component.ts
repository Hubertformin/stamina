import {Component, OnInit} from '@angular/core';
import {AppAuthService} from '../../providers/app-auth.service';
import {User} from 'firebase/app';
import {AuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authUser: User;
  user: SocialUser;
  socialLoggedIn = true;
  constructor(public auth: AppAuthService, private authService: AuthService) {}

  ngOnInit(): void {
    this.auth.authState
      .subscribe(auth => {
        this.authUser = auth;
      });
    // get social auth state
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.socialLoggedIn = !!user;
    });
  }
  // fackebook login
  loginWithFB() {
    this.auth.signInWithFB()
      .then((response) => {
        console.log(response);
      });
  }
}
