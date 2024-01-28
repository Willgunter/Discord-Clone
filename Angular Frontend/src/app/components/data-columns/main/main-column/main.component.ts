import { Component, EventEmitter, Output } from '@angular/core';
import { GuardsCheckEnd, GuardsCheckStart, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    currentRoute: string = "";
    // @Output() currentRouteEmitter: EventEmitter<string> = new EventEmitter();
    // don't need because we have the tag thing in the html component
    
    constructor(public configService: ConfigService, private _router: Router) {
        
        // this.configService.getMessage.subscribe(msg => this.currentRoute = msg);
        
        this._router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.currentRoute = val.urlAfterRedirects;
            } else {
                // console.log("failure");
                // do nothing
            }
        });
    }

    // updateMessage() {
    //     this.configService.setMessage(this.currentRoute);
    // }

}
