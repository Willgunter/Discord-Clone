import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  currentRoute: String;

  location: any;

  constructor(private _router: Router) { 

    _router.events.subscribe((data:any) => {
        this.location = data.url;
        // vvv this worked I think for a little bit vvv
        console.warn(this.location);
    })

  }
    // TODO: check out stack overflow topic on it
    // tip: ngif* might (will most likely be) extremely helpful
  }
  // problem line
//   constructor(private routerEvent: NavigationEnd) {
//     // console.log(routerEvent);
//   }

//   constructor(private router: Router) {
//     // console.log(route);
//     router.events.subscribe(
//         route => console.log(route.url)
//     );

// this.router.events.pipe(
//     filter((event:Event) => event instanceof NavigationEnd)
//     ).subscribe(x => console.log(x))

// this.router.events
//   .filter((event:Event) => event instanceof NavigationEnd)
//   .subscribe(x => console.log(x))

// gaurd service --> what does that mean???
// location.path() --> what does that mean???