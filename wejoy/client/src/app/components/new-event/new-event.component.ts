import {Component, Inject, OnInit, AfterContentChecked} from '@angular/core';
import { Event } from "../../type/event";
import { Router } from '@angular/router';

const DEFAULT_EVENT: Event = Object.freeze({
  id: 0,
  name: "",
  description: "",
  location: "",
  time: "",
  owner: "",
  tag: "",
  imageUrl: ""
})
@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  agree: boolean = false;
  error: string = "";

  newEvent: Event = Object.assign({}, DEFAULT_EVENT);

  constructor(@Inject("get_events") private getEvent,
              @Inject("auth") private auth,
              private router: Router) { }

  ngOnInit() {
    if(!this.auth.canCreateEvent()){
      this.router.navigate(['/home']);
    }
  }

  ngAfterContentChecked(){
    if(this.agree){
      this.error = "";
    }
  }

  addEvent(): void {
    if(this.agree){
      this.getEvent.addEvent(this.newEvent)
        .catch(error => console.log(error.body));
      this.newEvent = Object.assign({}, DEFAULT_EVENT);
    }else{
      this.error = "Please read and agree ...";
    }
  }

  

}
