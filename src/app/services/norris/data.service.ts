import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  gimmeJokes(): Observable<any> {
    return this.http.get('https://api.chucknorris.io/jokes/random')  as Observable<any>;
  }

}
