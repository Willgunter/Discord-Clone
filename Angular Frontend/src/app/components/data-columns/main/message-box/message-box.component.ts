import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';


// used for materialize framework (makes alerts look fancy and clean)
declare var M: any;

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css'],
    providers: [ConfigService],
})
export class MessageBoxComponent implements OnInit {
    

    @Output() onAddMessage: EventEmitter<Message> = new EventEmitter();

    // String for current route of server, courtesy of Main Component
    @Input() currentRoute: string = "";
    shortenedRoute: string = "";
    
    // text, server, and channel of specific message data
    text: string = "";
    user: User;
    authService: any;

    constructor(public configService: ConfigService) { }

    ngOnInit() {
        this.resetForm();
        this.refreshMessageList();
        
        let secondBackslash = this.currentRoute.indexOf("/", 1);
        this.shortenedRoute = this.currentRoute.substring(secondBackslash + 1, this.currentRoute.length);
    }

    resetForm(form?: NgForm) {
        // console.log("resetForm is working");
        if (form)
            form.reset();
            this.configService.selectedMessage = {
                // commented it out in message.model.ts (is it really necessary?)
                // _id: "",
                text: "",
                user: undefined,// this .user id or whatever
            }
    }

    // NOTE: CONSOLE.LOG() COMMANDS DISPLAY IN THE BROWSER CONSOLE,
    // NOT IN THE VSCODE TERMINAL
    onSubmit(form: NgForm) {

        if(!this.text) {
            alert('Please add a message');
            return;
        }

        // Constructing a new message object with text, server, and channel values
        const newMessage: Message = {
            // problem with id obviously
            // _id: "w",
            text: this.text,
            user: this.authService.getProfile()
        };

        const serverName = this.shortenedRoute.split("/", 1)[0];
        const channelName = this.shortenedRoute.split("/", 2)[1];

        // assigning form values to server and channel values inherited from app-main

        // postMessage(newMessage) kind of works but somehow gives an error as well???
        this.configService.postMessage(newMessage, serverName, channelName).subscribe((res) => {
        //     // how to pass form value onto config.service?
        });
        
        // this.onAddMessage.emit(newMessage); // I don't know what this is but code seems to work find without it

        this.configService.getMessageList().subscribe((res) => {
            this.resetForm(form);
            this.refreshMessageList();
            // at some point I would like to either make this in a better spot
            // or I may even just get rid of it altogether
            M.toast({html: 'Message sent', classes: 'rounded'});
        });
    // is this where "defaultserver" is happening?
    // does this even do anything?????
    

        // vvv does this do anything vvv
        // I think it might reset the text value?
        this.text = '';

  }

   // maybe try it on your own here (fetch most recent 10 comments from db maybe???)
   // yes but you still have to refresh the page (lame)
  refreshMessageList() {
    this.configService.getMessageList().subscribe((res) => {
      this.configService.messages = res as Message[];
    });
  }

}
