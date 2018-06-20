import { Component, OnInit } from '@angular/core';
import { Event } from '../../type/event';

@Component({
  selector: 'app-events-display',
  templateUrl: './events-display.component.html',
  styleUrls: ['./events-display.component.css']
})
export class EventsDisplayComponent implements OnInit {

  events: Event[] = [
    {
      id:1,
      name: "123",
      time: "12:00",
      description: "1st event",
      location: "test loc",
      owner: "user No.1"
      },
      {
        id:2,
        name: "2333",
        time: "22:00",
        description: "2st event",
        location: "test loc2",
        owner: "user No.2"
      },
      {
        id:3,
        name: "www",
        time: "1:00",
        description: "3st event",
        location: "test location",
        owner: "user No.1"
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
