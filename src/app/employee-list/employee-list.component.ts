import { Component } from '@angular/core';
import { NetworkService } from '../network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  constructor(public networkService: NetworkService, private router: Router) {}

  logout() {
    this.networkService.logout();
    this.router.navigate(['/login']);
  }
}
