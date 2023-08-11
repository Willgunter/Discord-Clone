import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  configService: any;

  // resetForm(form?: NgForm) {
  //   if (form)
  //   form.reset();
  //   this.configService.name = {
  //     _id: "",
  //     name: "",
  //     age: 0
  //   }
  // }

  // onSomething() {
  //   this.configService.talkWithBackend("hello").subscribe((res) => {
  //     this.
  //   });
  // }

}
