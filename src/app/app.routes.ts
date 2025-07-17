import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';

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
        path: '', 
        redirectTo: 'landing',
        pathMatch: 'full'
    }
];
