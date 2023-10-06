// used w HttpClient service to communicate w backend (I think)
// I don't know why I named it config but it does not
// have a specific functionality yet

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from './message.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    // vvv these two lines were copypastad from here:
    // https://www.samarpaninfotech.com/blog/methods-to-share-data-between-angular-components/#h-method-4-unrelated-components-via-a-service
    // private message = new BehaviorSubject('Initial message!!!');
    // getMessage = this.message.asObservable();
  
    // in the tutorial project, this was the url
    // that we interacted with (CRUD interactions)

    selectedMessage: Message;
    messages: Message[];
    readonly apiUrl = 'http://localhost:3000/messages';

    // what does private http:HttpClient service do?
    constructor(private http: HttpClient) { }
  
    // string can be replaced with Employee probably
    // why don't I use this method anywhere?
    postMessage(message: Message) {
        // works for some reason?
        return this.http.post(this.apiUrl, message);
    }

    getMessageList() {
        
        // this is working so progress?
        // maybe it was always working I just needed
        // to uncomment it?
        return this.http.get(this.apiUrl);
    }

    // see above resource
    // (we are not using said above resource so I commented it out)
    // setMessage(message: string) {
    //     console.log("setMessage being read");
    //     this.message.next(message);
    // }

}
