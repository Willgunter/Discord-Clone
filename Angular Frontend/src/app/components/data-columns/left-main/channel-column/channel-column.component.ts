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

    currentRoute: string;

    splicedChannel: string;

    // router: Router;
    constructor(public configService: ConfigService, private _router: Router) {

        // this.configService.getMessage.subscribe(msg => this.currentRoute = msg);

        this._router.events.subscribe((val) =>
        {
            if (val instanceof NavigationEnd) {

                this.currentRoute = this._router.url;

                this.splicedChannel = this.currentRoute.substring(1).split("/", 2)[0];
                
                // console.log(this.currentRoute);
            }

            else {
                // console.log("failure");
                // do nothing
            };
        
        }
        )

    }
    // how to get access to router

}

