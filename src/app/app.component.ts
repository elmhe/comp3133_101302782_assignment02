import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const EMPLOYEES_QUERY = gql`
  query getAllEmployees {
    getAllEmployees {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <h1>Employees List</h1>
    <ul>
      <li *ngFor="let employee of employees$ | async">
        {{ employee.firstName }} {{ employee.lastName }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101302782_comp3133_assignment02';

  employees$ = this.apollo.query<{ getAllEmployees: Employee[] }>({
    query: EMPLOYEES_QUERY,
  })//.pipe(map(res => res.data.getAllEmployees));

  constructor(private apollo: Apollo) {}
}

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
