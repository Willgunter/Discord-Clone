import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/services/message.model';


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
    
    // text, server, and channel of specific message data
    text: string = "";
    server: string = "";
    channel: string = "";

    constructor(public configService: ConfigService) {}

    ngOnInit() {
        this.resetForm();
        this.refreshMessageList();
    }

    resetForm(form?: NgForm) {
        console.log("resetForm is working");
    if (form)
        form.reset();
        this.configService.selectedMessage = {
            // commented it out in message.model.ts (is it really necessary?)
            // _id: "",
            text: "",
            server: "",
            channel: "",
        }
    }

    // NOTE: CONSOLE.LOG() COMMANDS DISPLAY IN THE BROWSER CONSOLE,
    // NOT IN THE VSCODE TERMINAL
    onSubmit(form: NgForm) {
        
        // parsing current route string
        this.server = this.currentRoute.substring(1).split("/", 2)[0];
        this.channel = this.currentRoute.substring(1).split("/", 2)[1];

        this.configService.getMessageList().subscribe((res) => {
            this.resetForm(form);
            this.refreshMessageList();
            M.toast({html: 'Message sent', classes: 'rounded'});
        });

        if(!this.text) {
            alert('Please add a message');
            return;
        }

        const newMessage: Message = {
            // problem with id obviously
            // _id: "w",
            text: this.text,
            server: this.server,
            channel: this.channel,
        };

        form.setValue({
            text: JSON.stringify(this.text),
            server: JSON.stringify(this.server),
            channel: JSON.stringify(this.channel),
        });

        // does not include quotes
        console.log(this.text+"text");
        console.log(this.server+"s");
        console.log(this.channel+"c");

        // does not include quotes
        console.log(form.value.text+"word");
        console.log(form.value.server+"s");
        console.log(form.value.channel+"c"); 
        
        // postMessage(newMessage) kind of works but somehow gives an error as well???
        this.configService.postMessage(form.value).subscribe((res) => {
            console.log("postmessage in message box works");
            // how to pass form value onto config.service?
        });
        
        // TODO where is the message going?
        // Probably the next step in this journey
        // and probably where I need to go...
        this.onAddMessage.emit(newMessage);
    // is this where "defaultserver" is happening?
    // does this even do anything?????
    
    // WHAT DOES THIS DO??
    // is it going to confit.service.ts?

    // vvv does this do anything vvv
    this.text = '';
    this.server = '';
    this.channel = '';

    // I think it might reset the text value?

  }

   // maybe try it on your own here (fetch most recent 10 comments from db maybe???)
  refreshMessageList() {
    this.configService.getMessageList().subscribe((res) => {
      this.configService.messages = res as Message[];
    });
  }

}
