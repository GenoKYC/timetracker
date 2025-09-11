import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = '';
  email = '';
  password = '';
  message = '';
  success = false;

  constructor(private authService: AuthService) {}

  onRegister() {
    this.message = '';
    this.success = false;

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
