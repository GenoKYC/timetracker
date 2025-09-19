import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
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
          this.toastr.success('Registration successful!', 'Success');
          console.log('Registration successful:', response);
          this.success = true;
          this.router.navigate(['/login']); // Navigate to login page after successful registration
        },
        (error: any) => {
          const msg =
            error.error?.error ||
            error.error?.message ||
            'Registration failed.';
          this.toastr.error(msg, 'Error'); // ✅ show error toast instead
          this.message = msg;
          this.success = false;
        }
      );
  }
}
