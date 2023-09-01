import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  title = 'Angular';
  currentRoute: String;

  location: any;

  // vvv next 15 or so lines work
//   constructor(private _router: Router) {

//     this._router.events.subscribe((val) =>
//         // if (val instanceof NavigationEnd)
//         {
            
//         if (val instanceof NavigationEnd) {
//             this.currentRoute = this._router.url;
//             console.log(this.currentRoute)
//         }

//         else {
//             console.log("failure");
//         };
        
//     }
//     )};

}