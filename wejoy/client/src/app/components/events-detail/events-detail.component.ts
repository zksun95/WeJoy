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
    private route: ActivatedRoute,
    @Inject("get_events") private getEvents
  ) { }

  event: Event;
  
  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      //this.event = this.events[+params["id"]-1];
      this.getEvents.getEventInfo(+params["id"]-1)
                    .subscribe((event)=>{
                      this.event = event
                    });
    });
  }

}
