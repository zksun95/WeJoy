import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Event } from '../../type/event';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  event: Event;

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
  
  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      this.event = this.events[+params["id"]-1];
    });
  }

}
