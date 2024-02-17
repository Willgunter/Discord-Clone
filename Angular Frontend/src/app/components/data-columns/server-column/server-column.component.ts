import { NgForm } from '@angular/forms';
import { Channel } from 'src/app/models/channel.model';
import { ConfigService } from 'src/services/config.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-server-column',
  templateUrl: './server-column.component.html',
  styleUrls: ['./server-column.component.css']
})
export class ServerColumnComponent {
    
    @Output() showBoxChange = new EventEmitter<boolean>();
    showBox: boolean;

    imageUrls: Map<String, String> = new Map<String, String>();
    
    name: string;
    channels: Channel[];
    
    constructor(public configService: ConfigService, public http: HttpClient) {}
    
    ngOnInit() {
        
        this.refreshServerList();
        this.resetForm();
        this.showBox = false;

    }
    
    // Method to update the value of showBox and emit the change
    updateShowBox() {
        this.showBox = !this.showBox;
        this.showBoxChange.emit(this.showBox);
    }
    
    resetForm(form?: NgForm) {
        if (form)
            form.reset();
        this.name = "";
    }

    refreshServerList() {
        
        this.configService.getServerList().subscribe((res) => {

            this.configService.servers = res as JSON;
            const map = new Map(Object.entries(this.configService.servers));
            let listOfServers = map.get("serverNames");
            
            listOfServers.forEach((url: String) => {
                this.imageUrls.set(url, "http://localhost:3000/servers/server-icon/" + url + ".png");
            });
            
            this.configService.giveServers(listOfServers);

        });
    }
}
