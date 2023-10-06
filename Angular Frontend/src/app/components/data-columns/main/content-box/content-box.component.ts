import { Component, Input } from '@angular/core';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/services/message.model';


@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css'],
  providers: [ConfigService]
})
export class ContentBoxComponent {

    // taking input from Main Component
    @Input() currentRoute: string = "";

  constructor(public configService: ConfigService) {}

  ngOnInit() {
    this.refreshMessageList();
  }

  refreshMessageList() {

    this.configService.getMessageList().subscribe((res) => {
      // what tf does this line even do
      this.configService.messages = res as Message[];
      
    });

  }

}
