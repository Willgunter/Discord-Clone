import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from 'src/services/config.service';
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

    // router: Router;
    constructor(public configService: ConfigService, private _router: Router) {

        // this.configService.getMessage.subscribe(msg => this.currentRoute = msg);
        
        this._router.events.subscribe((val) => {
                    if (val instanceof NavigationEnd) {
                        this.currentRoute = this._router.url;
                        this.splicedChannel = decodeURIComponent(this.currentRoute.substring(1).split("/", 2)[0]);
                    } else {
                        // console.log("failure");
                        // do nothing
                    };
                
                })
            }

    onClick() {
        location.reload();
    }

}
