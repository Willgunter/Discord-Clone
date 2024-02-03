import { Component, EventEmitter, Output, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import mongoose from 'mongoose';
import { Server } from 'src/app/models/server.model';


// used for materialize framework (makes alerts look fancy and clean)
declare var M: any;

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css'],
    providers: [ConfigService],
})
export class MessageBoxComponent implements OnInit {

    // String for current route of server, courtesy of Main Component
    @Input() currentRoute: string = "";

    serverName: string = "";
    channelName: string = "";
    text: string = "";
    user: User;

    constructor(public configService: ConfigService, public authService: AuthService) { }
    
    // if we click an a tag (server or channel)
    // then refresh page (transmits new route to this component)
    ngOnChanges(changes: SimpleChanges) { 
        
        this.updateServerAndChannelName(this.serverName, this.channelName);

        if (changes['currentRoute'] && !changes['currentRoute'].firstChange) {
            location.reload();
        }
    }

    ngOnInit() {
        
        this.resetForm();
        this.refreshMessageList();
        this.updateServerAndChannelName(this.serverName, this.channelName);

        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
                console.log(this.user);
                
            },
            error: (error) => {
                console.log(error);
                return false;
            }
        });

    }

    resetForm(form?: NgForm) {

        if (form)
            form.reset();
            this.configService.selectedMessage = {
                text: "",
                user: undefined,
            }
    }

    onSubmit(form: NgForm) {

        if(!this.text) {
            alert('Please add a message');
            return;
        }

        const newMessage: Message = {
            text: this.text,
            user: this.user,
        };
        
        // Adds message to database
        // TODO need to make this work for servers with spaces and such
        this.configService.postMessage(newMessage, this.serverName, this.channelName).subscribe((res) => {

        });

        // Refreshes message list
        this.configService.getMessageList().subscribe((res) => {

            this.resetForm(form);
            // HELLO???? CODE REUSE????? WHAT IS HAPPENING???
            this.refreshMessageList();
            // at some point I would like to either make this in a better spot
            // or I may even just get rid of it altogether
            M.toast({html: 'Message sent', classes: 'rounded'});
        });
        
        this.text = '';

  }

   // TODO maybe try it on your own here (fetch most recent 10 comments from db maybe???)
   // yes but you still have to refresh the page (lame)
    refreshMessageList() {
        this.configService.getMessageList().subscribe(async (res) => {

            this.configService.serversForMessages = res as JSON;

            const map = new Map(Object.entries(this.configService.serversForMessages));
            
            let serverIndex: number;
            let serverListWithMessages = map.get("messages");
            let servers = map.get("serverNames");
            
            for (serverIndex = 0; serverIndex < servers.length; serverIndex++) {
                if (servers[serverIndex] == this.serverName) {
                    break;
                }
            }

            // console.log(serverListWithMessages[serverIndex]);

            let channelIndex: number;
            for (channelIndex = 0; channelIndex < serverListWithMessages[serverIndex].length; channelIndex++) {
                if (serverListWithMessages[serverIndex][channelIndex].name == this.channelName) {
                    break;
                }

            }

            // console.log(serverListWithMessages[serverIndex][channelIndex]); // prints out correct channel
            // console.log(serverListWithMessages[serverIndex][channelIndex].messages[0]); // prints out correct message
            
            // const object = await Message.findOne({ _id: serverListWithMessages[serverIndex][channelIndex].messages[0] });

            // if (object) {
            //     console.log(object.text);
            // } else {
            //     console.log("Object not found");
            // }

        });
    }

    updateServerAndChannelName(server: string, channel: string) {
    
        const parts = this.currentRoute.split("/");
        this.serverName = parts[1];
        this.channelName = parts[2];
    
    }

}
