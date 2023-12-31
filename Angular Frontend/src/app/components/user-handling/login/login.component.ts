import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    // messy: clean up later
    username : string = "";
    password : string = "";
    
    // app.post(
//   "/log-in",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/"
//   })
// );
    // not sure how to incorporate this yet 
    // but shold be in login I *think*
    constructor(public configService: ConfigService, public router: Router) {}

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form)
        form.reset();

        this.configService.selectedUser = {
            // commented it out in message.model.ts (is it really necessary?)
            // _id: "",
            displayName: "",
            username: "",
            pwd: "",
            date: "",
        }

    }

    onSubmit(form: NgForm) {
        
        // parsing current route string

        // this is where we call a function in config.service.ts
        // that authenticates the user

        // Constructing a new message object with text, server, and channel values

        // assigning form values to server and channel values inherited from app-main
        form.value.username = this.username;
        form.value.password = this.password;

        // postMessage(newMessage) kind of works but somehow gives an error as well???
        // this.configService.postMessage(form.value).subscribe((res) => {
        //     // how to pass form value onto config.service?
        // });
        
        // TODO where is the message going?
        // Probably the next step in this journey
        // and probably where I need to go...
        // const user: User = {
        //     username: this.username,
        //     password: this.password,
        // }
        // this.onAddMessage.emit(newMessage); // I don't know what this is but code seems to work find without it
        console.log(this.username);

        // this.configService.authenticateUser(form.value).subscribe((res) => {
        //     this.resetForm(form);
        // });
        
        // this.configService.getMessageList().subscribe((res) => {
            // at some point I would like to either make this in a better spot
            // or I may even just get rid of it altogether
            // M.toast({html: 'Message sent', classes: 'rounded'});
        // });
    // is this where "defaultserver" is happening?
    // does this even do anything?????
    

        // vvv does this do anything vvv
        // I think it might reset the text value?

  }
    // add something here about login?

    // if we login successfully, redirect to school page
}
