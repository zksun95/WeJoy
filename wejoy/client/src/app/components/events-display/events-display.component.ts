import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Event } from '../../type/event';
import { Subject, Subscription, Observable, Observer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-events-display',
  templateUrl: './events-display.component.html',
  styleUrls: ['./events-display.component.css']
})

export class EventsDisplayComponent implements OnInit {

  loadMore: Subject<string> = new Subject();
  sub: Subscription;

  loading: boolean = true;

  events: Event[] = [];

  constructor(
    @Inject("get_events") private getEvents
  ) { }

  ngOnInit() {
    this.loadMoreEvents();
    this.sub = this.loadMore
                  .pipe(debounceTime(500))
                  .subscribe((res)=>{
                    console.log("loading!");
                    this.events=this.events.concat(this.getEvents.loadMoreEvents_());
                    this.loading = false;
                  });
  }

  loadMoreEvents(): void{
    this.events=this.events.concat(this.getEvents.loadMoreEvents_());
    this.loading = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScrollDown(e) {
    let scrollPosition = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    if((scrollPosition + window.innerHeight) > (document.body.offsetHeight - 30)){
      //this.events=this.events.concat(this.events2);
      this.loading = true;
      this.loadMore.next("loadmore");
      console.log("reached");
    }
    //console.log(pos+window.innerHeight);
    //console.log(window.pageYOffset+window.innerHeight);
    // console.log(window.scrollY);
    // console.log(document.documentElement.scrollTop);
    //console.log(document.body.offsetHeight);
  }

}
