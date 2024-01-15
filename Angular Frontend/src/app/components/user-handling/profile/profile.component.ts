import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/services/user.model'; // Not the problem

declare var M: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    
    user: any;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    
    // bruh same error but different problem?????
    ngOnInit() {
        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
                console.log(this.user);
            },
            error: (error) => {
                console.log(error);
                console.log("fuck");
                return false;
            }
        });
    }

    onLogoutClick() {
        this.authService.logout();
        M.toast({html: 'You are logged out', classes: 'rounded'});
        this.router.navigate(['/login']);
        return false;
    }
    
}
