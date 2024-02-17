import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from 'src/services/config.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { ValidateService } from 'src/services/validate.service';
import { AuthService } from 'src/services/auth.service';
import mongoose from 'mongoose';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    
    name : string = "";
    email: string = "";
    username : string = "";
    password : string = "";
    
    // note: not sure how to implement yet (send user object to database and stuff), will
    // come back to in a bit once we define the user object

    constructor(
        private authService: AuthService,
        private validateService: ValidateService,
        public configService: ConfigService,
        public router: Router
        ) {}
    
    ngOnInit() {
        this.resetForm();
        this.refreshUserList();
    }
    
    resetForm(form?: NgForm) {
        if (form)
        form.reset();
        this.configService.selectedUser = {
            // commented it out in message.model.ts (is it really necessary?)
            _id: undefined,
            name: "",
            email: "",
            username: "",
            password: "",
            color: "",
            owns: [],
        }
    }

    onSubmit(form: NgForm) {

        // Constructing a new message object with text, server, and channel values
        const newUser = {
            _id: new mongoose.Types.ObjectId(),
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            color: "white", // default color is white, can only change after logging in 
            owns: [],
        };

        if (newUser.username.length > 14) {
            M.toast({html: 'Username too long (max: 14)', classes: 'rounded'});
            return false;
        }

        if (newUser.name.length > 14) {
            M.toast({html: 'Name too long (max: 14)', classes: 'rounded'});
            return false;
        }

        // Validates the form
        if (!this.validateService.validateRegister(newUser)) {
            // Note: instead of toast we could have used
            // flash messages --> would probably look more like a website
            M.toast({html: 'Please fill in all fields', classes: 'rounded'});
            return false;
        }

        // Validate Email
        if(!this.validateService.validateEmail(newUser.email)) {
            M.toast({html: 'Please use a valid email', classes: 'rounded'});
            return false;
        }

        // Register User
        this.authService.registerUser(newUser).subscribe({
            next: (response) => {
                M.toast({html: 'You are now registered and can log in', classes: 'rounded'});
                this.resetForm(form);
                this.router.navigate(['/login']);
            },
            error: (error) => {
                M.toast({html: 'Something went wrong', classes: 'rounded'});
                this.router.navigate(['/register']);
            }
        });

        return true;

    }

  refreshUserList() {
    this.configService.getUserList().subscribe((res) => {
      this.configService.users = res as User[];
    });
  }

}
