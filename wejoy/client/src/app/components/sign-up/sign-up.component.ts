import { Component, OnInit, DoCheck, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(@Inject("auth") private auth,
              public router: Router) { }

  email: string = "";
  username: string = "";
  password: string = "";
  password_: string = "";
  agree: boolean = false;
  error: string = "";

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/home']);
    }
  }

  ngDoCheck(){
    if (this.agree && this.error=="Please agree ..."){
      this.error = "";
    }
    if (this.username && this.error == "Enter a username."){
      this.error = "";
    }
  }

  signup(){
    this.error = "";
    if (!this.agree){
      this.error = "Please agree ...";
    }
    if (this.password!=this.password_ && this.password!=""){
      this.error = "Passwords are different.";
    }
    if (!this.password){
      this.error = "Enter password."
    }
    if (!this.username){
      this.error = "Enter a username.";
    }
    if (!this.email){
      this.error = "Enter an eamil.";
    }
    if (!this.error){
      let data = JSON.stringify({
        "email": this.email,
        "username": this.username,
        "password": this.password
      });
      //console.log(data);
      this.auth.signup(data).subscribe(
        (response)=>{
        //console.log(response['user']);
        this.auth.setUser(response['token'], JSON.stringify(response['user']));
        this.router.navigate(['/home']);
        },
        (error)=>{
          console.log(error['error']['errors']);
          this.error = error['error']['errors']['email'];
        }
      );
    }
    
  }

}
