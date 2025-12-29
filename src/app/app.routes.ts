import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginpageComponent } from './pages/auth/loginpage/loginpage.component';
import { DtrComponent } from './pages/auth/dtr/dtr.component';
import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/main/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/main/employee/employee.component';
import { PositionsComponent } from './pages/main/pos-and-roles/positions';
import { DailytimerecordComponent } from './pages/main/dailytimerecord/dailytimerecord.component';
import { LeavepreviewComponent } from './pages/main/leavepreview/leavepreview.component';
import { SettingsComponent } from './pages/main/settings/settings.component';
import { EmployeerateComponent } from './pages/main/employeerate/employeerate.component';
import e from 'cors';
import { EmployeeloginComponent } from './pages/auth/employeelogin/employeelogin.component';
import { RolesComponent } from './pages/main/roles/roles.component';
export const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dtr',
    component: DtrComponent,
  },
  {
    path: 'employeelogin',
    component: EmployeeloginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'positions',
        component: PositionsComponent,
      },
      {
        path: 'roles',
        component: RolesComponent,
      },
      {
        path: 'dailytime',
        component: DailytimerecordComponent,
      },
      {
        path: 'leavepreview',
        component: LeavepreviewComponent,
      },
      {
        path: 'employeerate',
        component: EmployeerateComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
];
