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

    // text, server, and channel of specific message data
    text: string = "";
    server: string = "";
    channel: string = "";
    
    // String for current route of server, courtesy of Main Component
    @Input() currentRoute: String = "";

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
      _id: "",
      text: "",
      server: "",
      channel: "",
    }
  }

  // NOTE: CONSOLE.LOG() COMMANDS DISPLAY IN THE BROWSER CONSOLE,
  // NOT IN THE VSCODE TERMINAL
  onSubmit(form: NgForm) {

    // vvv what is this for ??? vvv
    // this.configService.postMessage(form.value).subscribe((res) => {

    // });

    // parsing current route string 
    // <current issue>

    this.configService.getMessageList().subscribe((res) => { // form.value
      // console.log("this is being read"); // this is *not* being read
      this.resetForm(form);
      this.refreshMessageList();
      M.toast({html: 'Message sent', classes: 'rounded'});
    });

    if(!this.text) {
      alert('Please add a message');
      return;
    }

    // current issue is that server and channel are still not 
    // being assigned anything because they need to be parsed
    // out of the currentRoute (should be easy)
    console.log(this.text+"thistext");
    console.log(this.server+"thisserver");
    console.log(this.channel+"thischannel");

    const newMessage: Message = new Message();
    // 
    newMessage.text = this.text;
    newMessage.server = this.server;
    newMessage.channel = this.channel;

    // not running  a
    console.log(newMessage.text+"<text>");
    console.log(newMessage.server+"<server>");
    console.log(newMessage.channel+"<channel>");

    // TODO where is the message going?
    // Probably the next step in this journey
    // and probably where I need to go...
    this.onAddMessage.emit(newMessage);
    // I have answered this question but I still have not writted it down
    // here yet because I am dumb???

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
