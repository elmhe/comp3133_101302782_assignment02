import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email,]), // this.emailExistsValidator()
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });

  constructor() { }

  signup(name: string, email: string, password: string) {
    // Create a new user and store their information
    // const newUser = { name, email, password };
    const newUser = this.signupForm.value;
    localStorage.setItem('users', JSON.stringify([newUser]));
  }

  // emailExistsValidator(): ValidatorFn {
  //   return (control: FormControl): {[key: string]: any} | null => {
  //     const users = JSON.parse(localStorage.getItem('users'));
  //     if (users && users.some(user => user.email === control.value)) {
  //       return { 'emailExists': true };
  //     }
  //     return null;
  //   };
  // }

}
