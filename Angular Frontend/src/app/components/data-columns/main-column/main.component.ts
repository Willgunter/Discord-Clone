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
    
    isSchoolWelcome: Boolean;
    isSchoolGeneral: Boolean;
    isSchoolSpecific: Boolean;
    
    isGymWelcome: Boolean;
    isGymGeneral: Boolean;
    isGymSpecific: Boolean;

    isThirdWelcome: Boolean;
    isThirdGeneral: Boolean;
    isThirdSpecific: Boolean;

    // current goal: undo whatever you did in order to follow Method 1 of the online guide thing. 

    // So why 

    constructor(public configService: ConfigService, private _router: Router) {

        this.configService.getMessage.subscribe(msg => this.currentRoute = msg);;

        this._router.events.subscribe((val) =>
            {
            
            if (val instanceof NavigationEnd) {

                this.currentRoute = this._router.url;

                if (this.currentRoute == "/skewl/welcome") {

                    this.isSchoolWelcome = true;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/skewl/general") {
                    
                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = true;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/skewl/specific") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = true;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                    // might be an issue here with VV (emojis)
                } else if (this.currentRoute == "/💪💪/welcome") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = true;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/💪💪/general") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = true;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/💪💪/server-specific") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = true;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/💪💪/server-specific") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = true;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/boys_only/welcome") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = true;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/boys_only/general") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = true;
                    this.isThirdSpecific = false;

                } else if (this.currentRoute == "/boys_only/server-specific") {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = true;

                } else {

                    this.isSchoolWelcome = false;
                    this.isSchoolGeneral = false;
                    this.isSchoolSpecific = false;

                    this.isGymWelcome = false;
                    this.isGymGeneral = false;
                    this.isGymSpecific = false;

                    this.isThirdWelcome = false;
                    this.isThirdGeneral = false;
                    this.isThirdSpecific = false;
                    
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
