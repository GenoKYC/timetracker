import { CommonModule, DatePipe } from '@angular/common'; // Added DatePipe
import { Component, OnInit } from '@angular/core';

interface Stat {
  label: string;
  value: number;
  color: string;
}

interface TimeRecord {
  employee: string;
  position: string;
  department: string;
  status: string;
  statusColor: string;
  timeIn: string;
  timeInColor: string;
  timeOut: string;
  timeOutColor: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], // Remove if not using SCSS
  imports: [CommonModule], // Added DatePipe
  standalone: true, // Explicit if Angular 17+
})
export class DashboardComponent implements OnInit {
  companyName = '[CompanyName]';
  day = 'Wednesday'; // Will be overwritten in ngOnInit
  date = 'September 11, 2025'; // Will be overwritten

  stats: Stat[] = [
    { label: 'Total Employee', value: 14, color: '#000000' },
    { label: 'Present Today', value: 6, color: '#16A34A' },
    { label: 'On Leave', value: 2, color: '#3B82F6' },
    { label: 'Absent', value: 1, color: '#DC2626' },
  ];

  tableHeaders = [
    'Employee',
    'Position',
    'Department',
    'Status',
    'Time In',
    'Time Out',
  ];

  timeRecords: TimeRecord[] = [
    {
      employee: 'Kyle Marave',
      position: 'Photographer',
      department: 'Secret',
      status: 'Present',
      statusColor: '#16a34a',
      timeIn: '13:30',
      timeInColor: '#16a34a',
      timeOut: '16:20',
      timeOutColor: '#dc2626',
    },
    {
      employee: 'Marie Marave',
      position: 'Photographer',
      department: 'Secret',
      status: 'Present',
      statusColor: '#16a34a',
      timeIn: '13:30',
      timeInColor: '#16a34a',
      timeOut: '16:20',
      timeOutColor: '#dc2626',
    },
  ];

  ngOnInit(): void {
    const today = new Date();
    this.day = today.toLocaleDateString('en-US', { weekday: 'long' });
    this.date = today.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    // If using currentDay: this.currentDay = `${this.day}, ${this.date}`;
  }
}
