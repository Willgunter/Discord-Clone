import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfigService } from 'src/services/config.service';

// used for materialize framework (makes alerts look fancy and clean)
declare var M: any;

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css'],
  providers: [ConfigService]
})
export class ContentBoxComponent {

    // taking input from Main Component ( no it isn't )
    @Input() currentRoute: string = "";

    populatedServers: any[] = [];

    serverName: string = "";
    channelName: string = "";

    users: string[] = [];
    messages: string[] = [];

  constructor(public configService: ConfigService) {}

    ngOnInit() {
        this.updateServerChannel();
        this.refreshMessageList();
    }

    refreshMessageList() {

        M.toast({html: 'Loading servers and messages...', classes: 'rounded red', displayLength: Infinity});

        this.configService.getMessageList().subscribe(async (res) => {

            const parts = this.currentRoute.split("/");
            this.serverName = parts[1];
            this.channelName = parts[2];

            this.configService.serversForMessages = res as JSON;

            const map = new Map(Object.entries(this.configService.serversForMessages));
                
            let placeholderServers = map.get("rtnmessages");
                
            let serverIndex: number;
            for (serverIndex = 0; serverIndex < placeholderServers.length; serverIndex++) {
                if (placeholderServers[serverIndex][0] == this.serverName) {
                    break;
                    }
            }
                
            let channelIndex: number;
            for (channelIndex = 0; channelIndex < placeholderServers[serverIndex][1].length; channelIndex++) {
                    
                if (placeholderServers[serverIndex][1][channelIndex][0] == this.channelName) {
                    break;
                }
            }

            this.populatedServers = placeholderServers[serverIndex][1][channelIndex][1]; // message text and sender of message

            M.Toast.dismissAll();
        });
    }

    updateServerChannel() {
    
        const parts = this.currentRoute.split("/");
        this.serverName = parts[1];
        this.channelName = parts[2];
    
    }

}
