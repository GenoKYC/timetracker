import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Stat {
  label: string;
  value: number;
  color: string;
}

interface TimeRecord {
  employee: string;
  contact: string;
  position: string;
  roles: string;
  status: string;
  statusColor: string;
  hire: string;
}
@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  stats: Stat[] = [
    { label: 'Total Employee', value: 14, color: '#000000' },
    { label: 'Present Today', value: 6, color: '#16A34A' },
    { label: 'On Leave', value: 2, color: '#3B82F6' },
    { label: 'Absent', value: 1, color: '#DC2626' },
  ];

  tableHeaders = ['Employee', 'Contact', 'Position', 'Roles', 'Status', 'Hire'];

  timeRecords: TimeRecord[] = [
    {
      employee: 'Kyle Marave',
      contact: 'Photographer',
      position: 'Secret',
      roles: 'Present',
      statusColor: '#16a34a',
      status: 'Present',
      hire: 'Jan 30, 2006',
    },
  ];
}
