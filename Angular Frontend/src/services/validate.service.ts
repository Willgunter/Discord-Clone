import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {

    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
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
