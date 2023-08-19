import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/services/user.model';


// used for materialize framework (makes alerts look fancy and clean)
declare var M: any;

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
  providers: [ConfigService],
})
export class MessageBoxComponent {
  @Output() onAddMessage: EventEmitter<String> = new EventEmitter();
  text: string;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshMessageList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.configService.selectedMessage = {
      _id: "",
      text: ""
    }
  }

  onSubmit(form: NgForm) {

    // currently only sends it to MongoDB (and might not even do that...)
    this.configService.postMessage(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshMessageList();
      M.toast({html: 'Message sent', classes: 'rounded'});
    }

    );

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

  }

   // maybe try it on your own here (fetch most recent 10 comments from db maybe???)
  refreshMessageList() {
    this.configService.getMessageList().subscribe((res) => {
      this.configService.messages = res as Message[];
    });
  }



}
