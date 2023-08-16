import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from 'src/services/config.service';

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

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.configService.message = {
      _id: "",
      text: ""
    }
  }

  onSubmit(form: NgForm) {

    // form.value is just referring to the text message in this case
    this.configService.postMessage(form.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({html: 'Message sent', classes: 'rounded', timeOut: 1});
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



}