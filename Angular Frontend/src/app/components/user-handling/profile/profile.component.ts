import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { HttpClient } from '@angular/common/http';

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
        public http: HttpClient,
        private router: Router
    ) { }
    
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

    onLogoutClick() {

        this.authService.logout();
        M.toast({html: 'You are logged out', classes: 'rounded'});
        this.router.navigate(['/register']);
        return false;

    }

    toMain() {
        window.location.href = "/servername/welcome";
    }
    
}
