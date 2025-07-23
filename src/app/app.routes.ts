import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginpageComponent } from './pages/auth/loginpage/loginpage.component';
export const routes: Routes = [
    {
        path: 'landing', 
        component: LandingComponent
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'register', 
        component: RegisterComponent
    },
     {
        path: 'loginpage', 
        component: LoginpageComponent
    },
    {
        path: '', 
        redirectTo: 'landing',
        pathMatch: 'full'
    }
];
