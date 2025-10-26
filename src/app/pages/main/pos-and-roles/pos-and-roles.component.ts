import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Stat {
  label: string;
  value: number;
  color: string;
}

interface TimeRecord {
  position: string;
  description: string;
  employees: string;
}
@Component({
  selector: 'app-pos-and-roles',
  imports: [CommonModule],
  templateUrl: './pos-and-roles.component.html',
  styleUrl: './pos-and-roles.component.scss',
})
export class PosAndRolesComponent {
  // stats: Stat[] = [
  //   { label: 'Total Employee', value: 14, color: '#000000' },
  //   { label: 'Present Today', value: 6, color: '#16A34A' },
  //   { label: 'On Leave', value: 2, color: '#3B82F6' },
  //   { label: 'Absent', value: 1, color: '#DC2626' },
  // ];

  tableHeaders = ['Position', 'Description', 'Employees'];

  timeRecords: TimeRecord[] = [
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
}
