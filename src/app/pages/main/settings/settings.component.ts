import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  selectedTab = 'profile'; // default selected tab

  settings = {
    username: '',
    email: '',
    organization: '',
    logo: '',
    theme: 'light',
    primaryColor: '#3583FF',
    emailAlerts: true,
  };

  saveSettings() {
    // Save settings logic here, e.g., API call or localStorage
    console.log('Settings saved:', this.settings);
  }
}
