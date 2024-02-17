import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../../../services/auth.service';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username : string = "";
    password : string = "";
    
    constructor(
        private authService:AuthService,
        public router: Router
    ) {}

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form)
        form.reset();
    }

    onLoginSubmit(form: NgForm) {

        const user = {
            username: this.username,
            password: this.password
        }

        this.authService.authenticateUser(user).subscribe({
            
            next: (response) => {
                if (response.success) {
                    console.log(response);
                    this.authService.storeUserData(response.token, response.user);
                    this.router.navigate(['/servername/welcome']);

                } else {
                    M.toast({html: "Wrong Password", classes: 'rounded'});
                    this.resetForm(form);
                    this.router.navigate(['/login']);
                }
                
            },
            error: (error) => {
                M.toast({html: 'Something went wrong', classes: 'rounded'});
                this.resetForm(form);
                this.router.navigate(['/login']);
            }
        });
    }
}
