import { Component, OnInit, Inject } from '@angular/core';
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

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/home']);
    }
  }

  signup(){
    let data = JSON.stringify({
      "email": this.email,
      "username": this.username,
      "password": this.password
    });
    //console.log(data);
    this.auth.signup(data).subscribe((response)=>{
      //console.log(response['user']);
      this.auth.setUser(response['token'], JSON.stringify(response['user']));
      this.router.navigate(['/home']);
    });
  }

}
