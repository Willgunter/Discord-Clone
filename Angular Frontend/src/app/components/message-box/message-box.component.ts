import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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
    
    @Output() onAddMessage: EventEmitter<String> = new EventEmitter();
    text: string;


  constructor(public configService: ConfigService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshMessageList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.configService.selectedMessage = {
      _id: "",
      text: "",
      server: "",
      channel: "",
    }
  }

  onSubmit(form: NgForm) {

    // how is console.log not even being read

    console.log("this is being read");
    // this.configService.postMessage(form.value).subscribe((res) => {

    // });

    // currently only sends it to MongoDB (and might not even do that...)
    // theory: .subscribe is deprecated and therefore need to write in try 
    // catch or whatever idk what to title this
    // WORRY ABOUT LATER
    // idkMessage().catch((err) => console.log('Error in Message Save :' + JSON.stringify(err, undefined, 2)));
    // async function idkMessage() { 
    //   console.log("this is being read"); // this is *not* being read
    //   this.resetForm(form);
    //   this.refreshMessageList();
    //   M.toast({html: 'Message sent', classes: 'rounded'});

    // };

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

    const newMessage = this.text;

    // TODO where is the message going?
    // Probably the next step in this journey
    this.onAddMessage.emit(newMessage);

    // vvv does this do anything vvv
    this.text = '';
    // I think it might reset the text value?

  }

   // maybe try it on your own here (fetch most recent 10 comments from db maybe???)
  refreshMessageList() {
    this.configService.getMessageList().subscribe((res) => {
      this.configService.messages = res as Message[];
    });
  }

}
