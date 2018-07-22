import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../type/order';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {

  constructor(private http: HttpClient,
    @Inject('auth') private auth) { }

  haveOrder(info: String): Observable<any>{
    console.log(info);
    //var headers = new HttpHeaders({'content-type' :'application/json'})
    return this.http.get(`/api/v1/orders/${info}`);
  }

  addOrder(order: Order): Promise<any>{
    var headers = new HttpHeaders({'content-type' :'application/json' })
    return this.http.post('/api/v1/orders', order)
      .toPromise()
      .then((res: Response) => {
        return res;
      });
  }
}
