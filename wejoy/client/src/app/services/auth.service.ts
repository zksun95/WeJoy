// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
// import {tokenNotExpired} from "angular2-jwt";

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'SQqTnHXz9lyqAWKdJgO00BJBhbj8OGnG',
    domain: 'wenbosong.auth0.com',
    responseType: 'token id_token',
    audience: 'https://wenbosong.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  //
  // public authenticated() {
  //   return tokenNotExpired();
  // }

  public logout(){
    localStorage.removeItem('id_token');
  }

}
