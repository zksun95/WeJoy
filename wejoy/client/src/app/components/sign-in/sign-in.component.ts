import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
  }

}
