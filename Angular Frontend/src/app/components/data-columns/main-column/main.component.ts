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

    isSchool: Boolean;

    constructor(public configService: ConfigService, private _router: Router) {

        this.configService.getMessage.subscribe(msg => this.currentRoute = msg);;

        this._router.events.subscribe((val) =>
            {
            
            if (val instanceof NavigationEnd) {

                this.currentRoute = this._router.url;

                if (this.currentRoute == "/skewl/welcome") {
                    this.isSchool = true;
                } else {
                    this.isSchool = false;
                }

            console.log(this.currentRoute);
        }

            else {
                console.log("failure");
            };
        
    }
        
        // console.log(' newline: %b', val instanceof NavigationEnd)
        // console.log("test")
    )

    }

    updateMessage() {
        this.configService.setMessage(this.currentRoute);
    }

}
