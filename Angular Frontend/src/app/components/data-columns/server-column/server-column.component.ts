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

            // retrieves file from form and stores it in serverImage
            const fileInput = document.getElementById('file') as HTMLInputElement;
            const serverImage = fileInput ? fileInput.files?.[0] : fileInput;
            const fileType = serverImage?.type;

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

            // const formData: FormData = new FormData();
            // formData.append('image', serverImage, serverImage.name);

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
                form.value.imagePath = "src/app/assets/images/serverImages/" + this.name + ".png"; 
                
                this.configService.postServer(form.value).subscribe({
                    next: () => {
                        
                        // adds file image locally (I think)
                        // is inside postServer because it needs to be called after the server is created 
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            if (event.target) {
                                const imageDataUrl = event.target.result as string;
                                console.log(imageDataUrl);
                            }
                        };
                        
                        reader.readAsDataURL(serverImage);
                        
                    },
                    error: (err) => {
                        console.error('Error posting server to the database:', err);
                    },
                    
                });
            
            // TODO eventually add a header for the channels (welcome to "general", or something, make sure it actually looks like discord, etc
            
        this.refreshServerList();
        this.resetForm();

        this.showBox = false;
    
      
    }

}
