import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  email: string = "";
  username: string = "";
  password: string = "";
  password_: string = "";
  agree: boolean = false;

  ngOnInit() {
  }

  signup(){
    console.log(this.email);
    console.log(this.username);
    console.log(this.password);
    console.log(this.password_);
    console.log(this.agree);
  }

}
