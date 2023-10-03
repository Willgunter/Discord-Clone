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

    // booleans
    @Input() isSchoolWelcome: Boolean;
    @Input() isSchoolGeneral: Boolean;
    @Input() isSchoolSpecific: Boolean;

    @Input() isGymWelcome: Boolean;
    @Input() isGymGeneral: Boolean;
    @Input() isGymSpecific: Boolean;

    @Input() isThirdWelcome: Boolean;
    @Input() isThirdGeneral: Boolean;
    @Input() isThirdSpecific: Boolean;

  constructor(public configService: ConfigService) {}

  ngOnInit() {
    this.refreshMessageList();
  }

  refreshMessageList() {
    console.log("test");
    
    this.configService.getMessageList().subscribe((res) => {
      // what tf does this line even do
      this.configService.messages = res as Message[];

    });
  }
}
