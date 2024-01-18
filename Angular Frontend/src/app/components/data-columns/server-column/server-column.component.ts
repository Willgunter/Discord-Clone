import { Component } from '@angular/core';
import { ConfigService } from 'src/services/config.service';
import { Server } from 'src/services/server.model';

@Component({
  selector: 'app-server-column',
  templateUrl: './server-column.component.html',
  styleUrls: ['./server-column.component.css']
})
export class ServerColumnComponent {

    showBox: boolean;
    test: string = "school";

    constructor(public configService: ConfigService) {}

    ngOnInit() {
      this.refreshServerList();
    }

    // NOT DONE YET
    refreshServerList() {

        this.configService.getServerList().subscribe((res) => {
          // what tf does this line even do
          this.configService.servers = res as Server[];
          
        });
    
      }

}
