import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
  constructor() {}

  // login(username: string, password: string){
  //   //check user's credential
  //   if (username === 'myUsername' && password === 'myPassword') {
  //     localStorage.setItem('currentUser', JSON.stringify({ username, password}));
  //   }
  // }

  login() {
    // Check if the email and password match an existing user in local storage
    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users: User[] = JSON.parse(usersString); // define the type of the users variable explicitly
      const user: User | undefined = users.find(user => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password);
      if (user) {
        // Store the user ID in local storage to maintain the session
        localStorage.setItem('userId', user.id.toString());
        // Navigate to the list of employees page
        // You can use the Angular Router to navigate to a different page
        // For example: this.router.navigate(['/employees']);
      } else {
        // Display an error message if the email and password don't match
        alert('Invalid email or password');
      }
    } else {
      // Display an error message if the users key does not exist in local storage
      alert('No users found');
    }
  }

}