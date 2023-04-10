import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkService } from '../network.service';

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

  loginForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private networkSevice: NetworkService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.networkSevice.login(this.form['email'].value, this.form['password'].value)
      .subscribe({
        next: () => {
          this.router.navigate(['/employee_list']);
        },
        error: (error) => {
          this.error = error;
        }
      });
  }

}