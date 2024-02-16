import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from 'src/services/config.service';
import { AuthService } from 'src/services/auth.service';
import { ContentBoxComponent } from '../../main/content-box/content-box.component';
import { UserBoxComponent } from 'src/app/components/data-columns/left-main/user-box/user-box.component';


@Component({
  selector: 'app-channel-column',
  templateUrl: './channel-column.component.html',
  styleUrls: ['./channel-column.component.css']
})
export class ChannelColumnComponent {

    // add @Output decorator so that when 
    // the user clicks on a channel, the
    // current route sends to the content box and message
    currentRoute: string;

    splicedChannel: string;

    user: any;

    canDelete: boolean;

    // router: Router;
    constructor(public configService: ConfigService, private _router: Router, private authService: AuthService ) {

        // this.configService.getMessage.subscribe(msg => this.currentRoute = msg);
        
        this._router.events.subscribe((val) => {
                    if (val instanceof NavigationEnd) {
                        this.currentRoute = this._router.url;
                        this.splicedChannel = decodeURIComponent(this.currentRoute.substring(1).split("/", 2)[0]);
                        console.log(this.splicedChannel);
                    } else {
                        // console.log("failure");
                        // do nothing
                    };
                
                })
    }

    ngOnInit() {

        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
                console.log(this.user.owns);

                for (let i = 0; i < this.user.owns.length; i++) {
                    if (this.user.owns[i] == this.splicedChannel) {
                        this.canDelete = true;
                    }
                }
            },
            error: (error) => {

                console.log(error);
                return false;

            }
        });


        // get current server (done)
        // get id from current user
        // if match, make a boolean true
        // so we can show delete button
        // (don't forget to add warning and stuff)
    }
    
    onClick() {
        location.reload();
    }
    
    deleteServer() {

        console.log(this.splicedChannel);
        
        this.configService.deleteServer(this.splicedChannel).subscribe({
            next: (response) => {
               
            },
            error: (error) => {
                console.log(error);
                return false;
            }
        });

        this.configService.deleteServerIcon(this.splicedChannel).subscribe({
                next: (response) => {
                    console.log("yay");
                },
                error: (error) => {
                        console.log(error);
                        return false;
                    }
                });
                

        this._router.navigate(['/servername/welcome']);
    
    }

}
