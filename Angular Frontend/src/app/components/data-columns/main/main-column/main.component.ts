import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    currentRoute: string;

    // current goal: undo whatever you did in order to follow Method 1 of the online guide thing. 

    // So why 

    constructor(public configService: ConfigService, private _router: Router) {

        this.configService.getMessage.subscribe(msg => this.currentRoute = msg);

        this._router.events.subscribe((val) =>
        {
            
            if (val instanceof NavigationEnd) {

                this.currentRoute = this._router.url;
                
                console.log(this.currentRoute);
            }

            else {
                console.log("failure");
            };
        
        }
        )

    }

    // I am so confused, what does this do, when and why did I add it?
    updateMessage() {
        this.configService.setMessage(this.currentRoute);
    }

}
