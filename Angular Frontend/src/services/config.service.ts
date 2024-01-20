// used w HttpClient service to communicate w backend (I think)
// I don't know why I named it config but it does not
// have a specific functionality yet

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';
import { Message } from './message.model';
import { Channel } from './channel.model';
import { Server } from './server.model';

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

    selectedMessage: Message; // why do I even need this?
    selectedUser: User;
    users: User[];
    messages: Message[];
    channels: Channel[];
    servers: Server[];

    // organized by type of request
    readonly messageApiUrl = 'http://localhost:3000/messages';
    readonly userApiUrl = 'http://localhost:3000/users';
    readonly getServerApiUrl = 'http://localhost:3000/servers/server-info';
    
    readonly userauthApiUrl = 'http://localhost:3000/authenticate';
    readonly createServerApiUrl = 'http://localhost:3000/servers/create-server';
    readonly createChannelApiUrl = 'http://localhost:3000/channels/create-channel';
    

    // what does private http:HttpClient service do?
    constructor(private http: HttpClient) { }
  
    postMessage(message: Message) {
        return this.http.post(this.messageApiUrl, message);
    }

    postUser(user: User) {
        return this.http.post(this.userApiUrl, user);
    }

    postServer(server: Server) {
        // how do I make a post request to a specific server? this.serverApiUrl + server ?
        return this.http.post(this.createServerApiUrl, server);
    }

    postChannel(channel: Channel) {
        return this.http.post(this.createChannelApiUrl, channel);
    }

    getServerList() {
        return this.http.get(this.getServerApiUrl);
    }

    getMessageList() {
        // this is working so progress?
        // maybe it was always working I just needed
        // to uncomment it?
        return this.http.get(this.messageApiUrl);
    }

    getUserList() {
        // why is this not working?
        return this.http.get(this.userauthApiUrl);
    }

    authenticateUser(user: User) {
        // - CHANGE IT USING A DATABASE
        return this.http.post(this.userauthApiUrl, user); // THIS CAN'T CHANGE
    }

    // see above resource
    // (we are not using said above resource so I commented it out)
    // setMessage(message: string) {
    //     console.log("setMessage being read");
    //     this.message.next(message);
    // }

}
