import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

import { ConfigService } from 'src/services/config.service';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent {

    user: User;
    showProfile: boolean;

    constructor( private authService: AuthService, private configService: ConfigService ) { }

    ngOnInit() {
        
        this.showProfile = false;

        this.authService.getProfile().subscribe({
            next: (response) => {
<<<<<<< HEAD
                this.user = response.user;
=======
                const linkElement = document.querySelector('link[href="./user-box.component.css"]') as HTMLLinkElement;
                if (linkElement) {
                    linkElement.href = './user-box.component.css?' + new Date().getTime();
                }
                // TODO GET IT TO CHANGE THE COLOR LIVE (MAYBE USE A BEHAVIOR SUBJECT)
                // ngOnInit() {
                //     this.showProfile = false;

                //     this.authService.getProfile().subscribe({
                //         next: (response) => {
                //             this.user = response.user;
                //             const linkElement = document.querySelector('link[href="./user-box.component.css"]') as HTMLLinkElement;
                //             if (linkElement) {
                //                 linkElement.href = './user-box.component.css?' + new Date().getTime();
                //             }
                //             this.userSubject.next(this.user); // Emit the updated user object
                //         },
                //         error: (error) => {
                //             console.log(error);
                //             return false;
                //         }
                //     });
>>>>>>> 9c62ee2dcdb5345711125441ddd4994fdc475b09
                
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

        if (this.user && this.user.username) {
            console.log(this.user.username + " " + color);
            this.configService.changeColor(this.user.username, color).subscribe({
                next: (response) => {
                    // console.log(response);
                    // this.ngOnInit();
<<<<<<< HEAD
                    // this.user.color = color;
                    // TODO BEHAVIOR SUBJECT
=======
                    this.user.color = color;
>>>>>>> 9c62ee2dcdb5345711125441ddd4994fdc475b09
                },
                error: (error) => {
                    console.log(error);
                    return false;
                }
            });
        }
    }

}
