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
    imageUrl: String = "https://localhost:3000/servers/server-icon/:testgym.png"; // TODO: <-- WIP

    name: string;
    channels: Channel[];
    serverToFileMap = new Map<Server, File>();

    constructor(public configService: ConfigService) {}

    ngOnInit() {
      this.refreshServerList();
      this.resetForm();
    }

    refreshServerList() {
        this.configService.getServerList().subscribe((res) => {
            this.configService.servers = res as Server[];
        });

        this.configService.getServerImageList().subscribe((res) => {
            this.configService.serverImages = res as File;
            
            this.imageUrl = `localhost:3000/servers/server-icon/${this.configService.serverImages.name}`;
            
            // this.updateImageUrl();
        });
    }

    // fuck this
    updateImageUrl() {
        if (this.configService.serverImages.length > 0) {
            const file = this.configService.serverImages[0]; // Assuming you want to display the first image
        }
    }

    resetForm(form?: NgForm) {
        if (form)
        form.reset();
        this.name = "";
    }

    onSubmit(form: NgForm) {

            // add a thing to check for duplicate server names

            const fileInput = document.getElementById('file') as HTMLInputElement;
            const inputImage = fileInput ? fileInput.files?.[0] : fileInput;
            
            const fileType = inputImage?.type;

            if (!this.name) {
                alert('Please add a name for your server');
                return;
            }

            if (!inputImage) {
                alert('Please select an image for your server');
                return;
            }

            if (fileType !== 'image/png' && fileType !== 'image/jpeg' && fileType !== 'image/jpg') {
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
            form.value.channels = [ defaultChannels[0]._id, defaultChannels[1]._id, defaultChannels[2]._id ];
                
            // replace name of file with name of imagePath for now
            // TODO: may not need imagePath at all if we make image name the servername (can we even do that?)
                
            this.configService.postServer(form.value).subscribe({
                next: () => {

                },
                error: (err) => {
                    console.error('Error posting server to the database:', err);
                },
                    
            });

            // posts image to server
            // this.file gives an error in the server (not displayed in app)
            // serverImage gives an internal server error

            if (inputImage) {
                console.log("name: " + this.name);

                const serverImage = new File([inputImage], this.name + ".png", { type: inputImage.type });
                // TODO have some thing that gets rid of white space in name and then compares it to see if its in database?
                // (to make .png images easy to use)
                this.configService.postServerImage(serverImage).subscribe({
                    
                    next: () => {
                        
                    },
                    error: (err) => {
                        console.error('Error posting image to the database:', err);
                    },
                    
                });

            }

            // TODO eventually add a header for the channels (welcome to "general", or something, make sure it actually looks like discord, etc
            
        this.refreshServerList();
        this.resetForm();

        this.showBox = false;
        
      
    }

}
