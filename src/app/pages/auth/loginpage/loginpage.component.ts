import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss',
})
export class LoginpageComponent {
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
