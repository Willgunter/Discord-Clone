import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
  providers: [ConfigService],
})
export class MessageBoxComponent {
  @Output() onAddMessage: EventEmitter<String> = new EventEmitter();
  text: String;

  constructor(private configService: ConfigService) {}

  onSubmit(form : NgForm) { 

    this.configService.postMessage(form.value).subscribe((res) => {}
    // this.resetForm???
    );

    if(!this.text) {
      alert('Please add a message');
      return;
    }

    const newMessage = this.text;

    this.onAddMessage.emit(newMessage);

    this.text = '';
  }



}
