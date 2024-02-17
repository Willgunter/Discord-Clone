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
    
    // if route changes, refresh the page (transmits new route data to other components)
    ngOnChanges(changes: SimpleChanges) { 
        
        this.updateServerAndChannelName();

        if (changes['currentRoute'] && !changes['currentRoute'].firstChange) {
            location.reload();
        }
    }

    ngOnInit() {
        
        this.resetForm();
        this.refreshMessageList();
        this.updateServerAndChannelName();

        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
                
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
        
        // make this toast display until the message is actually sent
        M.toast({html: 'Queueing message...', classes: 'rounded red', displayLength: Infinity});

        this.configService.postMessage(newMessage, this.serverName, this.channelName).subscribe((res) => {
            
        });
        
        // Refreshes message list
        this.configService.getMessageList().subscribe((res) => {
            
            this.resetForm(form);
            this.refreshMessageList();
            M.toast({html: 'Message sent', classes: 'rounded red'});
            setTimeout(() => {
                M.Toast.dismissAll();
            }, 1000);
            
        });
        
        this.text = '';

  }

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
            };

            let channelIndex: number;
            for (channelIndex = 0; channelIndex < serverListWithMessages[serverIndex].length; channelIndex++) {
                if (serverListWithMessages[serverIndex][channelIndex].name == this.channelName) {
                    break;
                }

            }

        });
    }

    updateServerAndChannelName() {
    
        const parts = this.currentRoute.split("/");
        this.serverName = parts[1];
        this.channelName = parts[2];
    
    }

}
