import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = '';
  email = '';
  password = '';
  message = '';
  success = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private authService: AuthService, private router: Router) {}
  onRegister() {
    this.message = '';
    this.success = false;

    console.log({
      user: this.user,
      email: this.email,
      password: this.password,
    });
    this.authService
      .register({
        user: this.user,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (response: any) => {
          this.message = 'Registration successful!';
          this.success = true;
        },
        (error: any) => {
          this.message = error.error?.message || 'Registration failed.';
          this.success = false;
        }
      );
  }
}
