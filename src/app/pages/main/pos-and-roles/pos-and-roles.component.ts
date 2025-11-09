import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// interface TimeRecord {
//   position: string;
//   description: string;
//   employees: string;
// }

interface PositionRecord {
  position: string;
  description: string;
  employees: string;
}

@Component({
  selector: 'app-pos-and-roles',
  imports: [CommonModule, FormsModule],
  templateUrl: './pos-and-roles.component.html',
  styleUrl: './pos-and-roles.component.scss',
})
export class PosAndRolesComponent {
  tableHeaders = ['Position', 'Description', 'Employees'];
  positions: PositionRecord[] = [
    {
      position: 'Contractual',
      description: 'Full-time contractual ',
      employees: '12',
    },
    {
      position: 'Part-Timer',
      description: 'Works < 20 hrs/week ',
      employees: '4',
    },
    {
      position: 'Project-Based',
      description: 'Per project contract ',
      employees: '8',
    },
  ];

  isPositionModalOpen = false;

  newPosition = {
    position: '',
    description: '',
    employees: '',
  };
  PositionRecord: any;
  submitPosition(event: Event) {
    event.preventDefault();

    this.positions.push({ ...this.newPosition });

    this.isPositionModalOpen = false;

    this.newPosition = {
      position: '',
      description: '',
      employees: '',
    };
  }
}
