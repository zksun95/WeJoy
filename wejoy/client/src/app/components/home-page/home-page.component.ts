import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../../type/event';
import { Subject, Subscription, Observable, Observer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
    events: Event[] = [];
  
    constructor(
      @Inject("get_events") private getEvents
    ) { }
  
    ngOnInit() {
      this.loadEvents();
    }
  
    loadEvents(): void{
      this.getEvents.loadEventsHome()
                    .subscribe(
                      (events)=>{
                        this.events=events;
                      }
                    );
    }
  
}
