import { Component, Input } from '@angular/core';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/app/models/message.model';


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

    // const server = route.params['server'];
    // const channel = route.params['channel'];

    // // makes sure server and channel both exist
    // this.configService.getChannelList().subscribe((res) => {

    //     this.configService.serversWithChannels = res as Server[];

    //     let serverExists = false;
    //     let channelExists = false;
    
    //     this.configService.serversWithChannels.forEach((s) => {

    //         if (s.name === server) {
    //             serverExists = true;
                
    //             if (s.channels && s.channels.length > 0) {
    //                 for (let i = 0; i < s.channels.length; i++) {
    //                     if (s.channels[i].name === channel) {
    //                         channelExists = true;
    //                         return true;
    //                     }
    //                 }

    //                 if(!channelExists) {
    //                     this.Router.navigate(['/' + server + '/welcome']);
    //                     return false;
    //                 }
    //             }
    //         }
    //             return false;
    //         });

    //         if (!serverExists) {
    //             this.Router.navigate(['/login']);
    //             return false;
    //         } 

    //         return true;
    // });

    // this.configService.getMessageList().subscribe((res) => {
    //   // what tf does this line even do
    //   this.configService.messages = res as Message[];
      
    // });

  }

}
