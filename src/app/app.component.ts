import {Component, OnInit} from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Stamina Scheduler';
  constructor() { }
  ngOnInit() {
  }
}
