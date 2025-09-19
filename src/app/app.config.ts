// app.config.ts
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),

    // ✅ Angular v17 async animations (PrimeNG likes this)
    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        // preset: Aura
      },
    }),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // ✅ Add BrowserAnimations & Toastr via importProvidersFrom
    importProvidersFrom(
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      })
    ),
  ],
};
