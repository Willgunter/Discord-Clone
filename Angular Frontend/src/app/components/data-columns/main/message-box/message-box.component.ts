import { Component, EventEmitter, Output, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import mongoose from 'mongoose';


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

    shortenedRoute: string = "";    
    text: string = "";
    user: User;
    

    constructor(public configService: ConfigService, public authService: AuthService) { }
    
    // if we click an a tag (server or channel)
    // then refresh page (transmits new route to this component)
    ngOnChanges(changes: SimpleChanges) {
        if (changes['currentRoute'] && !changes['currentRoute'].firstChange) {
            location.reload();
        }
    }

    ngOnInit() {
        this.resetForm();
        this.refreshMessageList();

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

        let secondBackslash = this.currentRoute.indexOf("/", 1);
        
        this.shortenedRoute = this.currentRoute.substring(secondBackslash + 1, this.currentRoute.length);
    }

    resetForm(form?: NgForm) {

        if (form)
            form.reset();
            this.configService.selectedMessage = {
                _id: undefined,
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
            _id: new mongoose.Types.ObjectId(),
            text: this.text,
            user: this.user,
        };

        const parts = this.currentRoute.split("/");
        
        const serverName = parts[1];
        const channelName = parts[2];
        
        // Adds message to database
        this.configService.postMessage(newMessage, serverName, channelName).subscribe((res) => {

        });

        // Refreshes message list
        this.configService.getMessageList().subscribe((res) => {
            this.resetForm(form);
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
    this.configService.getMessageList().subscribe((res) => {
        // need to get list of messages from list of channels from current server
        // not sure how to do it
        // going to make this work after I get white dot to work for active server
        // might need to change some stuff in config.service.ts
    //   this.configService.messages = res as Server[];
    });
  }

}
