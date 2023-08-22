// used w HttpClient service to communicate w backend (I think)
// I don't know why I named it config but it does not
// have a specific functionality yet

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  // in the tutorial project, this was the url
  // that we interacted with (CRUD interactions)

  selectedMessage: Message;
  messages: Message[];
  readonly apiUrl = 'http://localhost:3000/messages';

  // what does private http:HttpClient service do?
  constructor(private http: HttpClient) { }
  
  // string can be replaced with Employee probably
  postMessage(newMessage: Message) {
    console.log("postMessage being read");
    return this.http.post(this.apiUrl, newMessage);
  }

  getMessageList() {
    console.log("getMessageList being read");
    return this.http.get(this.apiUrl);
  }

}
