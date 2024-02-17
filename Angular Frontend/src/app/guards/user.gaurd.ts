import { Injectable } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ConfigService } from 'src/services/config.service';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserGuard {

    user: User;
    
    constructor(public configService: ConfigService, private authService:AuthService, public router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const username = route.params['username'];
            
        this.authService.getProfile().subscribe({
            next: (response) => {
                this.user = response.user;
                if (username === this.user.username) {
                    return true;
                } else {
                    this.router.navigate(['/me/' + this.user.username]);
                    return false;
                }
            },
            error: (error) => {
                console.log(error);
                return false;
            }
        });
    }
}