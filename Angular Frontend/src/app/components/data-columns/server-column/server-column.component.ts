import { NgForm } from '@angular/forms';

import { Channel } from 'src/app/models/channel.model';
import { Server } from 'src/app/models/server.model';

import mongoose from 'mongoose';

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

    
    name: string;
    channels: Channel[];
    imageUrls: Map<String, String> = new Map<String, String>();
    
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
            
            this.configService.servers = res as String[];

            this.configService.servers.forEach((url: String) => {
                console.log("url: " + url);
                this.imageUrls.set(url, "http://localhost:3000/servers/server-icon/" + url + ".png");
            });
            
        });

    }

}
