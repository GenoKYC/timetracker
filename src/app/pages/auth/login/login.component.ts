import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  onLogin() {
    console.log('test');
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          this.toastr.success('Login successful!', 'Success');

          this.router.navigate(['/main/dashboard']); // or ['/dashboard']
          // Handle successful login, e.g., navigate to another page
        },
        (error: any) => {
          console.error('Login failed:', error);
          const msg =
            error.error?.error || error.error?.message || 'Login failed.';
          this.toastr.error(msg, 'Error');
          // Handle login error, e.g., show an error message
        }
      );
  }
}
