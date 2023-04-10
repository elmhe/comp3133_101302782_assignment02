import { Component } from '@angular/core';
import { NetworkService } from './network.service';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = '101302782_comp3133_assignment02';

  constructor(public networkService: NetworkService,) {}
  
  login(email: string, password: string) {
    // Call the login method of the network service
    this.networkService.login(email, password);
  }

  logout() {
    // Call the logout method of the network service
    this.networkService.logout();
  }
  
}

