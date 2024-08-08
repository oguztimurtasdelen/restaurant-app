import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RestaurantModel } from "../models/restaurant.model";
import { environment } from 'src/environments/environment';
import { StoreModel } from '../models/store.model';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  
  private baseUrl = environment.apiInfo.baseUrl;
  private apiKey = environment.apiInfo.apiKey;


  constructor(private http: HttpClient) {
  }

  getFeed(skip: number, limit: number): Observable<RestaurantModel[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apiKey': this.apiKey
    });

    return this.http.post<{response: RestaurantModel[]}>(`${this.baseUrl}/mock/getFeed`, {
      skip: skip,
      limit: limit,
      latitude: 0,
      longitude: 0
    }, {headers})
    .pipe(
      map(res => res.response)
    )
  }

  getStoreInfo(id: string): Observable<StoreModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apiKey': this.apiKey
    });

    return this.http.post<{response: StoreModel}>(`${this.baseUrl}/mock/storeInfo`, {
      id: id
    }, {headers})
    .pipe(
      map(res => res.response)
    )
  }
}
