import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {

    if(user.name == "" || user.email == "" || user.username == "" || user.password == "") {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    // regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

}
