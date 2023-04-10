import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NetworkService } from './network.service';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Apollo, ApolloModule } from 'apollo-angular';
// import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
// import { InMemoryCache } from '@apollo/client/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ApolloModule,
    // HttpLink

  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(apollo: Apollo, httpLink: HttpLink) {
  //   apollo.create({
  //     link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
  //     cache: new InMemoryCache(),
  //   });
  // }
}
