import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {SeoService} from '../providers/seo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
              private afAuth: AngularFireAuth,
              private router: Router,
              private seo: SeoService,
              private msg: NzMessageService) { }

  ngOnInit() {
    // set page's title
    this.seo.setTitle('Login');
    // set form
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm() {
    if (this.loginForm.invalid) {
      this.msg.warning('Please input a valid name and password');
      return;
    }
    // login user
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    // show loader
    this.loading = true;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((auth$) => {
        this.router.navigate(['/app'])
          .then(() => {
            this.msg.info(`Logged in as ${auth$.user.email}`);
          });
      }).catch(err => {
        console.error(err);
        this.msg.error(err.message);
      }).finally(() => {
        this.loading = false;
    });
  }
}
