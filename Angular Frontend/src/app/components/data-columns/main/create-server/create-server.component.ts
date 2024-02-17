import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/services/config.service';
import { HttpClient } from '@angular/common/http';
import { Channel } from 'src/app/models/channel.model';
import { NgForm } from '@angular/forms';
import mongoose from 'mongoose';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/app/models/user.model';
import { ServerColumnComponent } from '../../server-column/server-column.component';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent {


    
    @Output() showBoxChange = new EventEmitter<boolean>();
    showBox: boolean;
    
    listOfServers: any;    

    name: string;
    channels: Channel[];
    user: User;
    imageUrls: String[];
        
    constructor(public configService: ConfigService, public http: HttpClient, private authService: AuthService) {}
        
    ngOnInit() {
        
        this.resetForm();

        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
            },
            error: (error) => {
                console.log(error);
                return false;
            }
        });
        
        // updates list of servers
        this.configService.currentListOfServers.subscribe(listOfServers => this.listOfServers = listOfServers);
        console.log(this.listOfServers);

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
            
            const fileInput = document.getElementById('file') as HTMLInputElement;
            const inputImage = fileInput ? fileInput.files?.[0] : fileInput;
            
            const fileType = inputImage?.type;
            
            if (!this.performChecks(inputImage, fileType)) {
                return;
            }
            
            // Constructing a new Server object
            const defaultChannels: Channel[] = [

                {
                    _id: new mongoose.Types.ObjectId(),
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
            form.value.owner = this.user._id;
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
                
                this.configService.postServerImage(serverImage).subscribe({
                    
                    next: () => {
                        location.reload();
                        this.updateShowBox();
                    },
                    
                    error: (err) => {
                        console.error('Error posting image to the database:', err);
                    },
                    
                });

            }
    }

    performChecks(inputImage: File | undefined, fileType: string | undefined) {

        if (!this.name) {
            alert('Please add a name for your server');
            return false;
        }

        if (this.name.includes(' ')) {
            alert('Please remove any spaces from your server name');
            return false;

        }

        for (let i = 0; i < this.listOfServers.length; i++) {
            if (this.name == this.listOfServers[i]) {
                alert('Can\'t have duplicate names for servers');
                return false;
            }
        }

        if (!inputImage) {
            alert('Please select an image for your server');
            return false;
        }
        
        if (fileType !== 'image/png') {
            alert('Please select a .png image for your server');
            return false;
        }

        return true;

    }

}

