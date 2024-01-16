import { Injectable } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthGuard  {

    constructor(private authService:AuthService, private Router:Router) { }

    // used to redirect router to login if user is not logged in
    canActivate() {

        if(this.authService.loggedIn()) {
            return true;
        } else {
            this.Router.navigate(['/login']);
            return false;

        }
    }

}