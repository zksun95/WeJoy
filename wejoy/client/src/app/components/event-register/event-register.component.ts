import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Event } from '../../type/event';
import {Order} from "../../type/order";


const DEFAULT_EVENT: Order = Object.freeze({
  id: 0,
  name: "",
  email: "",
  phone: ""
})

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  event: Event;
  newOrder: Order = Object.assign({}, DEFAULT_EVENT);

  constructor(
    private route: ActivatedRoute,
    @Inject("get_events") private getEvent
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      //this.event = this.events[+params["id"]-1];
      this.getEvent.getEventInfo(+params["id"])
        .subscribe((event)=>{
          this.event = event
        });
    });
  }

  registerEvent(): void {
    this.getEvent.registerEvent(this.newOrder)
      .catch(error => console.log(error.body));
    this.newOrder = Object.assign({}, DEFAULT_EVENT);
  }


}
