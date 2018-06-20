import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { VariableAst } from '@angular/compiler';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
//import 'rxjs/add/operator/debounceTime'
import { debounceTime } from 'rxjs/operators' 
//import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username = "";
  profile: any;
  sub: Subscription;

  // searchBox: FormControl = new FormControl();
  constructor(){}
  // constructor(@Inject("auth") private auth,
  //             @Inject("keywords") private keywords,
  //             private router: Router) {
  //   this.auth.handleAuthentication();
  // }

  // ngAfterContentChecked(){
  //   if(localStorage.getItem('profile')){
  //     this.username = JSON.parse(localStorage.getItem('profile')).nickname;
  //   } 
  // }

  // //d = new Date();
  ngOnInit(){}
  // ngOnInit() {
  //   this.sub = this.searchBox
  //                   .valueChanges
  //                   .pipe(
  //                     debounceTime(1000)
  //                   )
  //                   .subscribe(keyword=>this.keywords.setKeywords(keyword));
  //                   // .debounceTime(250)
  //                   // .subscribe(keyword=>this.keywords.setKeywords(keyword));
  //   // console.log(this.d.getTime());
  //   // if(this.auth.isAuthenticated()){
  //   //   this.updateProfile();
  //   // }
  //   // this.username = JSON.parse(localStorage.getItem('access_token')).nickname;
  // }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.sub.unsubscribe();
  // }

  // signIn(): void{
  //   this.auth.login();
  // }

  // signOut(): void{
  //   this.auth.logout(); 
  // }

  // updateProfile(): any{
  //   //console.log("try");
  //   this.auth.getProfile((err, profile) => {
  //     this.profile = profile;
  //     console.log(profile);
  //     localStorage.setItem("profile", JSON.stringify(profile));
  //     this.username = profile.nickname;
  //   });
  // }

  // search(){
  //   this.router.navigate(["/files"]);
  // }
}
