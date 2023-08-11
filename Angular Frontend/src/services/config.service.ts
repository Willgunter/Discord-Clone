// used w HttpClient service to communicate w backend (I think)
// I don't know why I named it config but it does not
// have a specific functionality yet

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model'; // TODO

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  // in the tutorial project, this was the url
  // that we interacted with (CRUD interactions)

  name: String | undefined;
  private apiUrl = 'http://localhost:3000/test';

  // what does private http:HttpClient service do?
  constructor(private http: HttpClient) { }
  
  // string can be replaced with Employee probably
  postMessage(filler: string) {
    return this.http.post(this.apiUrl, filler);
  }

}
