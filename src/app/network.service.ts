import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

interface LoginResponse {
  token: string;
}

interface SignupResponse {
  success: boolean;
}
 
@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  isLoggedIn = false;
  user = null;

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<boolean> {
    return this.http.post<SignupResponse>(`${this.baseUrl}/signup`, { email, password })
      .pipe(
        tap(response => {
          if (!response.success) {
            throw new Error('Signup failed');
          }
        }),
        map(response => true)
      );
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLogin(): boolean {
    return !!this.getToken();
  }


}
