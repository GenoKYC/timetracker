import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.scss'],
})
export class EmployeeloginComponent {
  constructor(private router: Router) {}

  submitLogin(): void {
    // no validation, just navigate
    this.router.navigate(['/dtr']);
  }
}
