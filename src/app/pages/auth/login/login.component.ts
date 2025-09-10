import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}
  onLogin() {
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          // Handle successful login, e.g., navigate to another page
        },
        (error: any) => {
          console.error('Login failed:', error);
          // Handle login error, e.g., show an error message
        }
      );
  }
}
