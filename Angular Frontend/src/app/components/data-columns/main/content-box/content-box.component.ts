import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/services/config.service';

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

  // not necessary because message-box does it for us
    refreshMessageList() {
        this.configService.getMessageList().subscribe(async (res) => {

            const parts = this.currentRoute.split("/");
            this.serverName = parts[1];
            this.channelName = parts[2];

            this.configService.serversForMessages = res as JSON;

            const map = new Map(Object.entries(this.configService.serversForMessages));
            
            let placeholderServers = map.get("rtnmessages");
            console.log(this.populatedServers);
            
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

            this.populatedServers = placeholderServers[serverIndex][1][channelIndex][1];
        
        });
    }

    updateServerChannel() {
    
        const parts = this.currentRoute.split("/");
        this.serverName = parts[1];
        this.channelName = parts[2];
        console.log(this.serverName );
    
    }

}
