import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {

    user: any;
    showProfile: boolean;

    constructor( private authService: AuthService ) { }

    ngOnInit() {
        
        this.showProfile = false;

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

    toProfile() {
        window.location.href = '/me/' + this.user.username;
        // note: send current server and channel to profile component so it doesnt wait for servers from backend
    }

    updateShowProfile() {
        this.showProfile = !this.showProfile;
    }

    updateColor(color: string) {
        // Change users color
        console.log('color changed' + color);
        // TODO implement color changing in user model (update in database) tomorrow hopefully
    }
}
