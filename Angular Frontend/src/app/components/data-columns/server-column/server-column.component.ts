import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Channel } from 'src/services/channel.model';
import { ConfigService } from 'src/services/config.service';
import { Server } from 'src/services/server.model';

declare var M: any;

@Component({
  selector: 'app-server-column',
  templateUrl: './server-column.component.html',
  styleUrls: ['./server-column.component.css']
})
export class ServerColumnComponent {

    showBox: boolean;

    name: string;

    constructor(public configService: ConfigService) {}

    ngOnInit() {
      this.refreshServerList();
      this.resetForm();
    }

    // NOT DONE YET
    refreshServerList() {

        this.configService.getServerList().subscribe((res) => {
          // what tf does this line even do
          this.configService.servers = res as Server[];
          
        });
    
    }

    resetForm(form?: NgForm) {
        if (form)
        form.reset();
    }

    onSubmit(form: NgForm) {
        
            // parsing current route string
        //     this.server = this.currentRoute.substring(1).split("/", 2)[0];
        //     this.channel = this.currentRoute.substring(1).split("/", 2)[1];
    
            if(!this.name) {
                alert('Please add a name for your server');
                return;
            }
    
        //     // Constructing a new message object with text, server, and channel values
            const newServer: Server = {
                name: this.name,
                // channels: [
                //     { name: "general", messages: [] },
                //     { name: "welcome", messages: [] },
                //     { name: "rules", messages: [] },
                // ],
            };
    
        //     // assigning form values to server and channel values inherited from app-main
            form.value.name = this.name;
        //     // postMessage(newMessage) kind of works but somehow gives an error as well???
            this.configService.postServer(form.value).subscribe((res) => {
                // CURRENTL PROBLEM
                console.log("test");
            });
            
            // this.onAddMessage.emit(newMessage); // I don't know what this is but code seems to work find without it
    
            this.configService.getServerList().subscribe((res) => {
                this.resetForm(form);
                this.refreshServerList();
        //         // at some point I would like to either make this in a better spot
        //         // or I may even just get rid of it altogether
                M.toast({html: 'Server Created', classes: 'rounded'});
            });
        // // is this where "defaultserver" is happening?
        // // does this even do anything?????
        
    
        //     // vvv does this do anything vvv
        //     // I think it might reset the text value?\
        this.showBox = false;
    
      
    }

}
