import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Channel } from 'src/services/channel.model';
import { Server } from 'src/services/server.model';

import mongoose from 'mongoose';

import { ConfigService } from 'src/services/config.service';

declare var M: any;

@Component({
  selector: 'app-server-column',
  templateUrl: './server-column.component.html',
  styleUrls: ['./server-column.component.css']
})
export class ServerColumnComponent {

    showBox: boolean;
    imageUrl: String = "http://localhost:3000/servers/create-server-icon/"; // TODO: <-- WIP

    name: string;
    channels: Channel[];
    // imagePath: string;

    constructor(public configService: ConfigService) {}

    ngOnInit() {
      this.refreshServerList();
      this.resetForm();
    }

    refreshServerList() {

        this.configService.getServerList().subscribe((res) => {
          this.configService.servers = res as Server[];
        });
    
    }

    resetForm(form?: NgForm) {
        // if (form)
        // form.reset();
        this.name = "";
    }

    onSubmit(form: NgForm) {

            
            // TODO I am doubting this part is right but really idfk
            // retrieves file from form and stores it in serverImage
            const fileInput = document.getElementById('file') as HTMLInputElement;
            const serverImage = fileInput ? fileInput.files?.[0] : fileInput;
            const fileType = serverImage?.type;

            // const file:File = target.files[0];

            console.log(serverImage);

            if (!this.name) {
                alert('Please add a name for your server');
                return;
            }

            if (!serverImage) {
                alert('Please select an image for your server');
                return;
            }

            if (fileType !== 'image/png' && fileType !== 'image/jpeg' && fileType !== 'image/jpg') {
                // why is type undefined?
                console.log("serverImage type: " + fileType);
                alert('Please select a .png image for your server');
                return;
            }

            // Constructing a new Server object (might not need)

            const defaultChannels: Channel[] = [

                {
                    _id: new mongoose.Types.ObjectId(), // problem
                    name: "welcome",
                    messages: [],
                },
    
                {
                    _id: new mongoose.Types.ObjectId(),
                    name: "roles",
                    messages: [],
                },
    
                {
                    _id: new mongoose.Types.ObjectId(),
                    name: "announcements",
                    messages: [],
                },
                
            ];

            // Loop through defaultChannels and post the channels to the database
            defaultChannels.forEach((channel) => {

                // bruh what the fuck is happening
                this.configService.postChannel(channel).subscribe({

                    next: () => {
                        // do nothing???
                    },
                    error: (err) => {
                        console.error('Error posting channel to the database:', err);
                    },
                
                });

            });

            form.value.name = this.name;
            form.value.channels = [ defaultChannels[0]._id, defaultChannels[1]._id, defaultChannels[2]._id ]; // I wanted there to be default channels but there needs to be an object id
                
            // replace name of file with name of imagePath for now
            // TODO: may not need imagePath at all if we make image name the servername (can we even do that?)
            form.value.imagePath = "src/app/assets/images/serverImages" + this.name + ".png"; 
                
            this.configService.postServer(form.value).subscribe({
                next: () => {

                },
                error: (err) => {
                    console.error('Error posting server to the database:', err);
                },
                    
            });

            // posts image to server
            this.configService.postServerImage(serverImage).subscribe({
                
                next: () => {
                                
                },
                error: (err) => {
                    console.error('Error posting image to the database:', err);
                },
                        
            });

            // TODO eventually add a header for the channels (welcome to "general", or something, make sure it actually looks like discord, etc
            
        this.refreshServerList();
        this.resetForm();

        this.showBox = false;
        
      
    }

}
