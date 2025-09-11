import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_BASE_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  register(user: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/auth/register`, {
      user,
      email,
      password,
    });
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/auth/login`, data, {
      withCredentials: true,
    });
  }
}
