import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface RoleRecord {
  roleid: number;
  role: string;
}
@Component({
  selector: 'app-roles',
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent {
  tableHeaders = ['Role ID', 'Role'];
  positions: RoleRecord[] = [
    {
      roleid: 1,
      role: 'Photo Editor ',
    },
    {
      roleid: 2,
      role: 'Video Editor',
    },
    {
      roleid: 3,
      role: 'Photographer',
    },
    {
      roleid: 4,
      role: 'Make-up Artist',
    },
    {
      roleid: 5,
      role: 'Videographer',
    },
    {
      roleid: 6,
      role: 'Production Assitant',
    },
  ];

  isRoleModalOpen = false;

  newRole = {
    roleid: 0,
    role: '',
  };
  PositionRecord: any;
  submitPosition(event: Event) {
    event.preventDefault();

    this.positions.push({ ...this.newRole });

    this.isRoleModalOpen = false;

    this.newRole = {
      roleid: 0,
      role: '',
    };
  }
}
