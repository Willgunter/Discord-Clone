import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from 'src/services/config.service';
import { User } from 'src/services/user.model';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    displayName : string = "";
    username : string = "";
    pwd : string = "";
    date : string = "";
    
    // note: not sure how to implement yet (send user object to database and stuff), will
    // come back to in a bit once we define the user object

    constructor(public configService: ConfigService, public router: Router) {}
    
    ngOnInit() {
        this.resetForm();
        this.refreshUserList();
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
        
        if(!this.username) {
            alert('Please add a username');
            return;
        }
        
        if(!this.pwd) {
            alert('Please add a password');
            return;
        }
        
        if(!this.date) {
            alert('Please add a date of birth');
            return;
        }
        // Constructing a new message object with text, server, and channel values
        const newUser: User = {
            // problem with id obviously
            // _id: "w",
            displayName: this.displayName,
            username: this.username,
            pwd: this.pwd,
            date: this.date, // YYYY-MM-DD
        };

        // can use newUser OR form.value (I think)
        this.configService.postUser(newUser).subscribe((res) => {
            // saves it to the database I think
        });
        
        // what does this even do vvv
        // this.onAddMessage.emit(newUser); // I don't know what this is but code seems to work find without it
 
        this.configService.getUserList().subscribe((res) => {
            this.resetForm(form);
            this.refreshUserList();
            // at some point I would like to either make this in a better spot
            // or I may even just get rid of it altogether
            M.toast({html: 'User created', classes: 'rounded'});
        });

        this.router.navigate(['/school']);
        
    }

    // is this where "defaultserver" is happening?
    // does this even do anything?????
    

        // vvv does this do anything vvv
        // I think it might reset the text value?
        // this.text = '';
        // this.server = '';
        // this.channel = '';

  refreshUserList() {
    this.configService.getUserList().subscribe((res) => {
      this.configService.users = res as User[];
    });
  }

}
