import {Component, Inject, OnInit} from '@angular/core';
import { Event } from "../../type/event";

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

  newEvent: Event = Object.assign({}, DEFAULT_EVENT);
  constructor(@Inject("get_events") private getEvent) { }

  ngOnInit() {
  }

  addEvent(): void {
    this.getEvent.addEvent(this.newEvent)
      .catch(error => console.log(error.body));
    this.newEvent = Object.assign({}, DEFAULT_EVENT);
  }

}
