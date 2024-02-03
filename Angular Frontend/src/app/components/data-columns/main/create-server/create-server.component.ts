import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfigService } from 'src/services/config.service';
import { HttpClient } from '@angular/common/http';
import { Channel } from 'src/app/models/channel.model';
import { NgForm } from '@angular/forms';
import mongoose from 'mongoose';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent {

    showBox: boolean;
    @Output() showBoxChange = new EventEmitter<boolean>();

    name: string;
    channels: Channel[];
    imageUrls: String[];

    constructor(public configService: ConfigService, public http: HttpClient) {}

    ngOnInit() {
        this.resetForm();
    }

    updateShowBox() {
        this.showBox = !this.showBox;
        this.showBoxChange.emit(this.showBox);
    }
    
    resetForm(form?: NgForm) {
        if (form)
            form.reset();
        this.name = "";
    }

    onSubmit(form: NgForm) {

            // TODO add a thing to check for duplicate server names
            
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

                this.configService.postChannel(channel).subscribe({
                    
                    next: () => {
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
            // so we have inputImage instead

            if (inputImage) {
                console.log("name: " + this.name);
                
                const serverImage = new File([inputImage], this.name + ".png", { type: inputImage.type });
                // TODO have some thing that gets rid of white space in name and then compares it to see if its in database?
                // (to make .png images easy to use)
                
                this.configService.postServerImage(serverImage).subscribe({
                    
                    next: () => {
                        // Note to self: this has to be in the next function 
                        // as opposed to outside the postServerImage function
                        // Im guessing because it will execute before the image is posted
                        // this.updateShowBox(); can be outside but is here for cleanliness
                        location.reload();
                        this.updateShowBox();
                    },
                    error: (err) => {
                        console.error('Error posting image to the database:', err);
                    },
                    
                });

            }

            // TODO eventually add a header for the channels (welcome to "general", or something, make sure it actually looks like discord, etc
    }
}
