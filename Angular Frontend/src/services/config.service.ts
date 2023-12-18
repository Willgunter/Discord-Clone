// used w HttpClient service to communicate w backend (I think)
// I don't know why I named it config but it does not
// have a specific functionality yet

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from './message.model';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

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
    messages: Message[];
    users: User[];
    readonly messageApiUrl = 'http://localhost:3000/messages';
    readonly userApiUrl = 'http://localhost:3000/users';
    readonly userauthApiUrl = 'http://localhost:3000/authenticate';

    // what does private http:HttpClient service do?
    constructor(private http: HttpClient) { }
  
    postMessage(message: Message) {
        return this.http.post(this.messageApiUrl, message);
    }

    postUser(user: User) {
        console.log("why");
        return this.http.post(this.userApiUrl, user);
    }

    getMessageList() {
        // this is working so progress?
        // maybe it was always working I just needed
        // to uncomment it?
        return this.http.get(this.messageApiUrl);
    }

    getUserList() {
        return this.http.get(this.userApiUrl);
    }

    authenticateUser(user: User) {
        // HERE IS THE PROBLEM HERE I AM
        // PROBLEM IS HERE (PROBLEM IS THAT IDK HOW TO ACCESS RES.LOCALS)
        // THIS IS THE PROBLEM
        // WHAT THE FUCK HOW DO I SOLVE THIS
        // SHOULD I USE WEBSOCKETS OR SOMETHING???
        // ACCORDING TO BARD WE HAVE OPTIONS LIKE
        // - SERVERSIDE EVENTS
        // - CHANGE IT USING A DATABASE
        // - USE WEBSOCKETS
        // GOING TO WORK ON IT TOMORROW
    this.http.post(this.userauthApiUrl, user).subscribe((res: any) => { // doesnt work 
        //but right Idea I think
        const modifiedLocals = res.body.locals; // Access the modified res.locals object here
        // Use the modifiedLocals object as needed
        console.log("what: " + modifiedLocals.message);
    });
    
        this.http.post(this.userauthApiUrl, user).subscribe((response) => {
                const success = response['success']; // Access the 'success' property from the response
                // Use the 'success' value in your Angular code
                console.log(success);
            });

        return this.http.post(this.userauthApiUrl, user); // THIS CAN'T CHANGE
    }

    // see above resource
    // (we are not using said above resource so I commented it out)
    // setMessage(message: string) {
    //     console.log("setMessage being read");
    //     this.message.next(message);
    // }

}
