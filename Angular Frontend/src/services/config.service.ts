// used w HttpClient service to communicate w backend (I think)
// I don't know why I named it config but it does not
// have a specific functionality yet

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from '../app/models/user.model';
import { Message } from '../app/models/message.model';
import { Channel } from '../app/models/channel.model';
import { Server } from '../app/models/server.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    // used to communicate server values between create server and
    // server column components
    private listOfServers = new BehaviorSubject<String[]>([]);
    currentListOfServers = this.listOfServers.asObservable();

    selectedMessage: Message;
    selectedUser: User;
    users: User[];
    serversWithChannels: Server[]; // for content guard
    serversForMessages: JSON; // for message box
    servers: JSON; // for server column

    // organized by type of request
    readonly messageApiUrl = 'http://localhost:3000/messages';
    readonly userApiUrl = 'http://localhost:3000/users';
    readonly serverApiUrl = 'http://localhost:3000/servers/server';
    readonly serverImageApiUrl = 'http://localhost:3000/servers/server-icon/';
    readonly channelApiUrl = 'http://localhost:3000/channels/channel';
    readonly channelsApiUrl = 'http://localhost:3000/channels';
    
    readonly userauthApiUrl = 'http://localhost:3000/authenticate';
    static servers: any;

    constructor(private http: HttpClient) { }

    giveServers(servers: String[]) {
        this.listOfServers.next(servers);
    }

    postUser(user: User) {
        return this.http.post(this.userApiUrl, user);
    }

    // used to get the list of channels for a server
    postServer(server: any) {
        return this.http.post(this.serverApiUrl, server);
    }

    postMessage(message: Message, serverName: String, channelName: String) {
        const list = [message, serverName, channelName];
        return this.http.put(this.serverApiUrl, list);
    }

    postServerImage(serverIcon: File) {

        // need this to work for some reason
        let formParams = new FormData();
        formParams.append('file', serverIcon);

        return this.http.post(this.serverImageApiUrl + serverIcon.name, formParams);
    }

    postChannel(channel: Channel) {
        return this.http.post(this.channelApiUrl, channel);
    }

    getServerList() {
        return this.http.get(this.serverApiUrl);
    }

    getChannelList() {
        return this.http.get(this.channelsApiUrl);
    }
    
    getServerImage() {
        return this.http.get(this.serverImageApiUrl);
    }
    
    // Returns same thing as getServerList()
    getMessageList() {
        return this.http.get(this.serverApiUrl);
    }
    
    getUserList() {
        return this.http.get(this.userauthApiUrl);
    }

    authenticateUser(user: User) {
        return this.http.post(this.userauthApiUrl, user);
    }

    changeColor(username: string, color: string) {
        const list = [username, color];
        return this.http.put(this.userApiUrl + "/users", list);
    }

    deleteServer(serverName: string) {
        return this.http.delete(this.serverApiUrl, { params: { serverName: serverName } });
    }

    deleteServerIcon(serverName: string) {
        return this.http.delete(this.serverImageApiUrl + serverName, { params: { serverName: serverName } });
    }

}
