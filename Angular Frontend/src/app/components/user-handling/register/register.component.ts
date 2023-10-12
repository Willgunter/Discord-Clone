import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    displayName : string = "";
    username : string = "";
    pwd : string = "";
    date : string = "";

}
