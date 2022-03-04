import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  rootURL = 'https://www.kayak.com/h/mobileapis/directory/airlines';
  endpoint = 'homework';

  constructor(private http: HttpClient) { }

  getAirlines(): Observable<Object> {
    return this.http.jsonp(`${this.rootURL}/${this.endpoint}`, 'jsonp');
  }
}
