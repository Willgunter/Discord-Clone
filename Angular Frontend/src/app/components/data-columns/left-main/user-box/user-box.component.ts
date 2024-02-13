import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

import { ConfigService } from 'src/services/config.service';
import { AuthService } from 'src/services/auth.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {

    user: User;
    showProfile: boolean;
    color = new BehaviorSubject<string>("");

    constructor( private authService: AuthService, private configService: ConfigService ) { }

    ngOnInit() {
        
        this.showProfile = false;

        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
                this.color.next(this.user.color);
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

    // Change users color
    updateColor(color: string) {

        this.color.next(color); // updates color here so we don't have to wait on response from server (makes it faster)

        if (this.user && this.user.username) {
            console.log(this.user.username + " " + color);
            this.configService.changeColor(this.user.username, color).subscribe({
                next: (response) => {
                    const responseObj = JSON.parse(JSON.stringify(response));
                    const color = responseObj.msg;

                },
                error: (error) => {
                    console.log(error);
                    return false;
                }
            });
        }
    }

}
