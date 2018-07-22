import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Order } from '../../type/order';
import { Event } from '../../type/event';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    @Inject("get_events") private getEvents,
    @Inject("get_orders") private getOrders
  ) { }

  event: Event;
  JOIN: String[] = ["I'M IN!", "ALREADY IN"]
  join: String = this.JOIN[0];
  info: String = "";

  newOrder: Order=({
    event_id: 0,
    user_email: "",
    order_time: "0",
    order_type: "n1",
  });
  
  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      let email = JSON.parse(localStorage.getItem('profile')).email;
      this.newOrder.user_email = email;
      this.newOrder.event_id = +params["id"];
      //this.event = this.events[+params["id"]-1];
      this.getEvents.getEventInfo(+params["id"])
                    .subscribe((event)=>{
                      this.event = event
                    });
      this.info = email+"&"+params["id"];
      console.log(this.info);
      this.getOrders.haveOrder(this.info)
                    .subscribe(
                    (order)=>{
                      if(order.length==0){
                        console.log(order);
                        this.join = this.JOIN[0];
                        console.log("out");
                      }else{
                        console.log(order);
                        this.join = this.JOIN[1];
                        console.log("in");
                      }
                      
                    });
    });
  }

  addOrder(): void {
    if(this.join === this.JOIN[1]) {
      console.log("skip");
      return;
    }
    console.log(this.newOrder);
    this.getOrders.addOrder(this.newOrder)
      .then(res=>{
      console.log(this.info);
      this.getOrders.haveOrder(this.info)
                    .subscribe(
                    (order)=>{
                      if(order.length==0){
                        console.log(order);
                        this.join = "I'M IN";
                        console.log("out");
                      }else{
                        console.log(order);
                        this.join = "ALREADY IN";
                        console.log("in");
                      }
                      
                    });
      })
      .catch(error => console.log(error.body));
    //this.newOrder = Object.assign({}, DEFAULT_ORDER);
    
  }

}
