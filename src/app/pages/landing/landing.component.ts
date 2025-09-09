import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true, // ✅ Required if you're using `imports: []`
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'], // ✅ Corrected property name
})
export class LandingComponent {}
