// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {tokenNotExpired} from "angular2-jwt";

(window as any).global = window;

@Injectable()
export class AuthService {

  // auth0 = new auth0.WebAuth({
  //   clientID: 'hD-KRtHDfEXR0Bktcpu3OoVMurlRGqjV',
  //   domain: 'wejoy.auth0.com',
  //   responseType: 'token id_token',
  //   audience: 'https://wejoy.auth0.com/userinfo',
  //   redirectUri: 'http://localhost:3000/callback',
  //   scope: 'openid profile'
  // });

  userProfile: any;

  constructor(public router: Router, private http: HttpClient) {}

  // ------------------ own authori ------------------
  public setUser(token, profile){
    localStorage.setItem("profile", profile);
    localStorage.setItem("token", token);
  }

  public isAuthenticated(){
    return localStorage.getItem('token')!=null;
  }

  public removeUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public getProfile(){
    return localStorage.getItem('profile');
  }

  // ------------------ using auth0 ------------------
  // public login() {
  //   return new Promise((resolve, reject)=>{
  //     this.auth0.authorize(()=>{
  //       //console.log("1");
  //       //this.handleAuthentication();
  //       this.getProfile((err, profile) => {
  //         //console.log("2");
  //         localStorage.setItem("profile", JSON.stringify(profile));
  //         resolve();
  //       });
  //     });
  //   });
  // }

  // public handleAuthentication(): void {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.setSession(authResult);
  //       this.router.navigate(['/home']);
  //     } else if (err) {
  //       this.router.navigate(['/home']);
  //       console.log(err);
  //       alert(`Error: ${err.error}. Check the console for further details.`);
  //     }
  //   });
  // }

  // private setSession(authResult): void {
  //   // Set the time that the access token will expire at
  //   const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  //   localStorage.setItem('access_token', authResult.accessToken);
  //   localStorage.setItem('id_token', authResult.idToken);
  //   localStorage.setItem('expires_at', expiresAt);
  //   this.getProfile((err, profile) => {
  //     localStorage.setItem("profile", JSON.stringify(profile));
  //   });
  // }

  // public logout(): void {
  //   console.log("try out");
  //   localStorage.removeItem('access_token');
  //   localStorage.removeItem('id_token');
  //   localStorage.removeItem('expires_at');
  //   localStorage.removeItem('profile');
  // }

  // public isAuthenticated(): boolean {
  //   const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
  //   return new Date().getTime() < expiresAt;
  // }

  // public getProfile(cb): void {
  //   const accessToken = localStorage.getItem('access_token');
  //   if (!accessToken) {
  //     throw new Error('Access token must exist to fetch profile');
  //   }

  //   const self = this;
  //   this.auth0.client.userInfo(accessToken, (err, profile) => {
  //     if (profile) {
  //       self.userProfile = profile;
  //     }
  //     cb(err, profile);
  //   });
  // }

  // public changePass(): Observable<Object>{
  //   console.log("change");
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json'
  //     })
  //   };

  //   let profile = {
  //               client_id: "O228e5ilo3JZXHQKSfYRmi6VvwQXCsC9",
  //               email: JSON.parse(localStorage.getItem("profile")).name,
  //               connection: "Username-Password-Authentication"
  //             };
  //   console.log(profile);
  //   return this.http.post('https://zksun.auth0.com/dbconnections/change_password', profile, httpOptions);
  // }

}
