import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TimeRecord {
  employee: string;
  position: string;
  contact: string;
  leavetype?: string;
  date?: string;
  status: string;
  statusColor?: string;
}

@Component({
  selector: 'app-leavepreview',
  imports: [CommonModule, FormsModule],
  templateUrl: './leavepreview.component.html',
  styleUrl: './leavepreview.component.scss',
})
export class LeavepreviewComponent {
  tableHeaders = [
    'Employee',
    'Position',
    'Contact',
    'Leave Type',
    'Date (From-To)',
    'Status',
  ];

  timeRecords: TimeRecord[] = [
    {
      employee: 'Kyle Marave',
      position: 'Software Engineer',
      contact: '+601 2345 6789',
      leavetype: 'Annual Leave',
      date: '12 Jan 2024 - 15 Jan 2024',
      status: 'Approved',
      statusColor: '#16a34a',
    },
  ];

  isModalOpen = false;

  newLeaveRequest: TimeRecord = {
    employee: '',
    position: '',
    contact: '',
    leavetype: '',
    date: '',
    status: '',
    statusColor: '',
  };

  submitLeaveRequest(event: Event) {
    event.preventDefault();

    let statusColor = '#a3a3a3'; // default gray
    if (this.newLeaveRequest.status === 'Approved') {
      statusColor = '#16a34a';
    } else if (this.newLeaveRequest.status === 'Rejected') {
      statusColor = '#dc2626';
    } else if (this.newLeaveRequest.status === 'Pending') {
      statusColor = '#fbbf24';
    }

    this.timeRecords.push({
      ...this.newLeaveRequest,
      statusColor,
    });

    this.newLeaveRequest = {
      employee: '',
      position: '',
      contact: '',
      leavetype: '',
      date: '',
      status: '',
      statusColor: '',
    };

    this.isModalOpen = false;
  }
}
