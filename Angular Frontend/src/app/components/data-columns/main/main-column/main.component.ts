import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    currentRoute: string = "";
    
    constructor(public configService: ConfigService, private _router: Router) {
        
        this._router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.currentRoute = val.urlAfterRedirects;
            } else {
                
            }
        });
    }

}
