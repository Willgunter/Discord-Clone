import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
    
    user: User;
    showProfile: boolean;
    
    constructor(private authService: AuthService) { }
    
    ngOnInit() {
        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
                this.showProfile = this.authService.loggedIn();
            },
            error: (error) => {
                console.log(error);
                return false;
            }
        });
    }

}
