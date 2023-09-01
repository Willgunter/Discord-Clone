import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ConfigService } from 'src/services/config.service';
import { Message } from 'src/services/message.model';


@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css'],
  providers: [ConfigService]
})
export class ContentBoxComponent {


    currentRoute: String;

  constructor(public configService: ConfigService, private _router: Router) { 
    
    this._router.events.subscribe((val) =>
        {
            
        if (val instanceof NavigationEnd) {
            this.currentRoute = this._router.url;
            console.log(this.currentRoute)
        }

        else {
            console.log("failure");
        };
        
    }
        
        // console.log(' newline: %b', val instanceof NavigationEnd)
        // console.log("test")
    )

  }

  ngOnInit() {
    this.refreshMessageList();
  }

  refreshMessageList() {
    console.log("test");
    
    this.configService.getMessageList().subscribe((res) => {
      // what tf does this line even do
      this.configService.messages = res as Message[];
    });
  }
}
