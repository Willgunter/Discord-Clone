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

  onSubmit(form: NgForm) { // (form : NgForm) 

    //form.value = just the text message in this case
    this.configService.postMessage(form.value).subscribe((res) => {
      // TODO this.resetForm???  add later once it becomes an
      M.toast({html: 'sent', classes: 'rounded'});
    }

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
