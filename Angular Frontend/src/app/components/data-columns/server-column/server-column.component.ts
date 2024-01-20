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
    
            if(!this.name) {
                alert('Please add a name for your server');
                return;
            }

            // CURRENT TASK
            // something like this probably??
            // const files: File[] = Array.from(form.value.files).filter(file => file.type === 'image/png');
        

            // Constructing a new Server object
            const newServer: Server = {
                name: this.name,
                
            };
    
            form.value.name = this.name;
        //     // postMessage(newMessage) kind of works but somehow gives an error as well???
            this.configService.postServer(form.value).subscribe((res) => {
                // CURRENTL PROBLEM
                console.log("test");
            });
    
            this.configService.getServerList().subscribe((res) => {
                this.resetForm(form);
                this.refreshServerList();
                M.toast({html: 'Server Created', classes: 'rounded'});
            });

        this.showBox = false;
    
      
    }

}
