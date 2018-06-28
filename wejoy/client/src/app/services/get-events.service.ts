import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../type/event';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GetEventsService {

  // fake_events = [
  //   {
  //     id:1,
  //     name: "Pop Up Dinner NYC",
  //     time: "SEP 08 2018",
  //     description: `New York City (NYC) gets to experience the glamour of the popular All-white Dinners. Soirée en Blanc “An Evening in White” the Pop Up edition Soirée dans le Parc comes to the City. Only 2000 diners will experience this elegant All-White showcase. Register NOW to get First round invitation. (Date subject to change before Ticket sales begin soon.

  //       Pop Up NYC takes the hurdles out of the fun experience and added more fun and convenience. No hauling of tables and chairs to the secret venue. Yes, you will be dining under the stars at one of the City's most picturesque locations.



  //       Luxury buses transport you to the secret location either from a metro station or convenient pre-arranged parking lot. You are welcomed at the secret location by Live Band and top Deejays, hundreds of white linen tables and white chairs. Yes, tables, chairs and linens are provided.

  //       Let's not forget your picnic basket. Sip fine wine, champagne and dance the evening away. Register now to get first chance to get Early Bird prices and secure your spot before they are sold out.`,
  //     location: "Secret NYC Location 10021",
  //     owner: "The Signature Society",
  //     imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F41638359%2F61861132805%2F1%2Foriginal.jpg?w=800&auto=compress&rect=107%2C107%2C3460%2C1730&s=0ccf42500cd2901cd0874105ff720da2",
  //     },
  //     {
  //       id:2,
  //       name: "Color Block Party at Pier 17",
  //       time: "JUN 30 2018",
  //       description: `We are celebrating summer at Pier 17 at the Seaport District NYC, with a sea of colorful experiences. Join us for a Color Block Party on Saturday, June 30th featuring acclaimed artist GERONIMO, who will unveil a new semi-permanent installation overlooking the East River, based on her trademark massive-scale, colorful sculptures made of recycled, air-inflated balloons.

  //       The FREE all-day party, taking place on the brand-new Pier 17 Heineken® Riverdeck, will kick off at 12:00 PM with live DJs, food trucks, signature drinks and some of the most incredible views of Brooklyn, the East River and the City.


  //       Don't miss performances by Brittany Sky and the headliner Cut Copy DJs, along with a spectacular entrance by artist GERONIMO, starting at 6:00 PM.

  //       Dress head-to-toe in your colorful best for a chance to win from the $10,000 worth of prizes.


  //       Please note that tickets do not guarantee entry. Entry is on a first-come, first-served basis.`,
  //       location: "Pier 17 89 South Street New York, NY 10038",
  //       owner: "Seaport District NYC",
  //       imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45786833%2F176701156929%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C90%2C1432%2C716&s=931bb553257dd1999ab71df82147b99d",
  //     },
  //     {
  //       id:3,
  //       name: "ROOFTOP PARTY SATURDAY NIGHT , TIMES SQUARE | 360 VIEWS OF NYC",
  //       time: "JUN 23 2018",
  //       description: `Must say ICLUBNYC LIST TO GET IN

  //       ROOFTOP PARTY SATURDAY NIGHT

  //       WITH a UPSCALE AND CLASSY Atmosphere
  //       AT

  //       SKY ROOM Rooftop TIMES SQUARE
  //       330 west 40th st BET 8th & 9th ave.

  //       Mix music top 40s

  //       Doors open at 10pm

  //       FOR BOTTLE SERVICE, B'DAY PARTY OR ANY EVENTS email US BOOKING

  //       21 and over with proper ID /FINAL ENTRENCE IS UPTO THE DOORMAN Discretion

  //       LADIES FREE / GENTS FREE B4 11:00PM $20 after ONLY ON ICLUBNYC LIST

  //       Must Show ticket or say ICLUBNYC LIST TO GET IN

  //       STRICT DRESS CODE POLICY: -Gentlemen: Shoes, Button down shirts, and jeans are acceptable. No baggy attire, Sneakers, Boots, or Hats are allowed. -Ladies: Heels & classy`,
  //       location: "SKY ROOM 330 WEST 40TH New York, NY 10036",
  //       owner: "ICLUBNYC",
  //       imageUrl:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44550934%2F24250841862%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C68%2C700%2C350&s=9b2728adc37ebc30ff35e478c0bfc34d"
  //     }
  // ];

  constructor(private http: HttpClient) { }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  loadMoreEvents(tag: string): Observable<Event[]>{
     //return this.fake_events;
    return this.http.get<Event[]>(`api/v1/events/${tag}`);
  }

  loadEventsHome(): Observable<Event[]>{
    //return this.fake_events;
   return this.http.get<Event[]>("api/v1/events");
  }

  getEventInfo(id: number): Observable<Event>{
    //return this.fake_events[id];
    // let res=new Observable<Event>(
    //   (observer)=>{
    //   observer.next(this.fake_events[id]);
    //   observer.complete();
    // });
    //return res;
    return this.http.get<Event>(`api/v1/events/detail/${id}`);
  }

  addEvent(event: Event): Promise<Event>{
    var headers = new HttpHeaders({'content-type' :'application/json' })
    return this.http.post('/api/v1/events',event)
      .toPromise()
      .then((res: Response) => {
        return res;
      })
      .catch(this.handleError);
  }
}
