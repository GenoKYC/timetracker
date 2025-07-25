import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginpageComponent } from './pages/auth/loginpage/loginpage.component';
import { DtrComponent } from './pages/auth/dtr/dtr.component';
import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/main/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path: 'landing', component: LandingComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
     {
        path: 'dtr', component: DtrComponent
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: "dashboard", component: DashboardComponent
            },
            {
                path: "", redirectTo: "dashboard", pathMatch: 'full'
            }
        ]
    },
    {
        path: '', 
        redirectTo: 'landing',
        pathMatch: 'full'
    }
];
