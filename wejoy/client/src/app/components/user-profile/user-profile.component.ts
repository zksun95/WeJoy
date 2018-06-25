import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username="";
  email="";
  message="";
  
  constructor(@Inject("auth") private auth, public router: Router) { }

  ngOnInit() {
    //if(this.auth.isAuthenticated()){
    this.username=JSON.parse(localStorage.getItem("profile")).nickname;
    this.email=JSON.parse(localStorage.getItem("profile")).name;
    //this.auth.getMoreProfile();
    // }else{
    //   //this.router.navigate(['/files']);
    // }
  }

  changePass(): void{
    this.auth.changePass()
    .subscribe(
      res=>{
        console.log(res);
        this.message = "We've just send you a e-mail to reset your password.";
      },
      err=>{
        console.log(err.error.text);
        this.message = err.error.text;
      }
    )
    
    //this.message=this.auth.changePass();
  }

}
