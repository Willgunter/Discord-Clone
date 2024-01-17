import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/services/user.model';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {

    user: any;

    constructor( private authService: AuthService ) { }

    ngOnInit() {
        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
            },
            error: (error) => {
                console.log(error);
                return false;
            }
        });
    }

}
