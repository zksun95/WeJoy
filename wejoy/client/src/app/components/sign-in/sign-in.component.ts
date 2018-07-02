import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(@Inject("auth") private auth,
              public router: Router) { }

  email: string;
  password: string;
  error: string = "";

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/home']);
    }
  }

  login(){
    this.error = "";
    if(!this.password){
      this.error = "Please enter your password."
    }
    if(!this.email){
      this.error = "Please enter your username."
    }
    if(!this.error){
      let data = JSON.stringify({
        "email": this.email,
        "password": this.password
      });
      this.auth.login(data).subscribe(
        (response)=>{
          //console.log(response);
          this.auth.setUser(response['token'], JSON.stringify(response['user']));
          this.router.navigate(['/home']);
        },
        (error)=>{
          console.log(error);
          if(error['error']['email']){
            this.error = error['error']['email'];
          }
          if(error['error']['message']){
            this.error = error['error']['message'];
          }
        }
    );
      //console.log(this.email);
      //console.log(this.password);
    }
    
  }

}
