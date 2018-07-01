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

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/home']);
    }
  }

  login(){
    let data = JSON.stringify({
      "email": this.email,
      "password": this.password
    });
    this.auth.login(data).subscribe((response)=>{
      //console.log(response);
      this.auth.setUser(response['token'], JSON.stringify(response['user']));
      this.router.navigate(['/home']);
    });
    console.log(this.email);
    console.log(this.password);
  }

}
