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
    // @Input() isSchoolWelcome: string = "";
    @Input() isSchoolWelcome: BooleanConstructor; // problem is that 1) if it is unititialized
    // it doesn't do anything 2) if initialied to true, it stays true forever 3)
    // if initialized to false it stays false forever
    @Input() isSchoolGeneral: boolean;
    @Input() isSchoolSpecific: boolean;

    @Input() isGymWelcome: boolean;
    @Input() isGymGeneral: boolean;
    @Input() isGymSpecific: boolean;

    @Input() isThirdWelcome: boolean;
    @Input() isThirdGeneral: boolean;
    @Input() isThirdSpecific: boolean;

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
