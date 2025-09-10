import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import Swal from 'sweetalert2';
import { LoginComponent } from './app/pages/auth/login/login.component';

bootstrapApplication(LoginComponent, {
  providers: [
    importProvidersFrom(HttpClientModule), // 👈 add here if you don’t want to add to component
  ],
});
