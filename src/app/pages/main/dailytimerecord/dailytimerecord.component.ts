import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Stat {
  label: string;
  value: number;
  color: string;
}

interface TimeRecord {
  date: string;
  employee: string;
  position: string;
  status: string;
  statusColor: string;
  timein: string;
  timeout: string;
  totalhours: string;
}

@Component({
  selector: 'app-dailytimerecord',
  imports: [CommonModule, FormsModule],
  templateUrl: './dailytimerecord.component.html',
  styleUrl: './dailytimerecord.component.scss',
})
export class DailytimerecordComponent {
  newTaskDueDate = '';

  stats: Stat[] = [
    { label: 'Total Employee', value: 14, color: '#000000' },
    { label: 'Present Today', value: 6, color: '#16A34A' },
    { label: 'On Leave', value: 2, color: '#3B82F6' },
    { label: 'Absent', value: 1, color: '#DC2626' },
  ];

  tableHeaders = [
    'Date',
    'Employee',
    'Position',
    'Status',
    'Time In',
    'Time Out',
    'Total Hours',
  ];

  timeRecords: TimeRecord[] = [
    {
      date: 'Jan 1, 2024',
      employee: 'Kyle Marave',
      position: ' Photographer',
      status: ' Present',
      statusColor: '  #16a34a',
      timein: ' 08:00 AM',
      timeout: '  05:00 PM',
      totalhours: '  9h 0m',
    },
  ];
}
