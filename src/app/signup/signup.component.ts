import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupData: any = {};

  signupForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private networkService: NetworkService
  ) {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this.networkService.signup(this.form['email'].value, this.form['password'].value)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.error = error;
        }
      });
  }

}
