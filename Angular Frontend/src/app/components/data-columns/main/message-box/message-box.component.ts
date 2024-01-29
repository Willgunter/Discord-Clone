import { Component, EventEmitter, Output, Input, OnInit, SimpleChanges } from '@angular/core';
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

    // String for current route of server, courtesy of Main Component
    @Input() currentRoute: string = "";

    
    shortenedRoute: string = "";
    
    // text, server, and channel of specific message data
    text: string = "";
    user: User;
    

    constructor(public configService: ConfigService, public authService: AuthService) { }
    
    ngOnChanges(changes: SimpleChanges) {
        if (changes['currentRoute'] && !changes['currentRoute'].firstChange) {
            // Perform your desired action here
            location.reload();
            // Call a method or execute code based on the new value of currentRoute
            // Example: this.refreshMessageList();
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
        // console.log("resetForm is working");
        if (form)
            form.reset();
            this.configService.selectedMessage = {
                // _id: "",
                text: "",
                user: undefined,
            }
    }

    // NOTE: CONSOLE.LOG() COMMANDS DISPLAY IN THE BROWSER CONSOLE,
    // NOT IN THE VSCODE TERMINAL
    onSubmit(form: NgForm) {

        if(!this.text) {
            alert('Please add a message');
            return;
        }

        // new message object
        const newMessage: Message = {
            // problem with id obviously
            text: this.text,
            user: this.user,
        };
        
        console.log("cr:" + this.currentRoute);
        const parts = this.currentRoute.split("/");
        
        const serverName = parts[1];
        const channelName = parts[2];


        console.log("sn:" + serverName);
        console.log("cn:" + channelName);
        
        // postMessage(newMessage) kind of works but somehow gives an error as well???
        this.configService.postMessage(newMessage, serverName, channelName).subscribe((res) => {
        //     // how to pass form value onto config.service?
        });

        this.configService.getMessageList().subscribe((res) => {
            this.resetForm(form);
            this.refreshMessageList();
            // at some point I would like to either make this in a better spot
            // or I may even just get rid of it altogether
            M.toast({html: 'Message sent', classes: 'rounded'});
        });
        

        // vvv does this do anything vvv
        // I think it might reset the text value?
        this.text = '';

  }

   // TODO maybe try it on your own here (fetch most recent 10 comments from db maybe???)
   // yes but you still have to refresh the page (lame)
  refreshMessageList() {
    this.configService.getMessageList().subscribe((res) => {
      this.configService.messages = res as Message[];
    });
  }

}
