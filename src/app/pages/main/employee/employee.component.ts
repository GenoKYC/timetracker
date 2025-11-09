import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Stat {
  label: string;
  value: number;
  color: string;
}

interface TimeRecord {
  id: string;
  employee: string;
  contact: string;
  position: string;
  roles: string;
  status: string;

  hire: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  stats: Stat[] = [
    { label: 'Total Employee', value: 14, color: '#000000' },
    { label: 'Present Today', value: 6, color: '#16A34A' },
    { label: 'On Leave', value: 2, color: '#3B82F6' },
    { label: 'Absent', value: 1, color: '#DC2626' },
  ];

  tableHeaders = [
    'Employee ID',
    'Employee',
    'Contact',
    'Position',
    'Roles',

    'Hire',
  ];

  timeRecords: TimeRecord[] = [
    {
      id: 'KY001',
      employee: 'Kyle Marave',
      contact: 'Photographer',
      position: 'Secret',
      roles: 'Photo Editor',

      status: 'Present',
      hire: 'Jan 30, 2006',
    },
  ];

  isModalOpen = false;

  newEmployee: Omit<TimeRecord, 'id' | 'statusColor'> = {
    employee: '',
    contact: '',
    position: '',
    roles: '',
    status: '',
    hire: '',
  };

  submitEmployee(event: Event): void {
    event.preventDefault();

    // Generate status color based on status value

    // Generate unique employee ID based on input
    const newId = this.generateEmployeeId(this.newEmployee);

    // Create full record with ID and statusColor
    const employeeRecord: TimeRecord = {
      id: newId,

      ...this.newEmployee,
    };

    this.timeRecords.push(employeeRecord);

    this.isModalOpen = false;

    // Reset the form
    this.newEmployee = {
      employee: '',
      contact: '',
      position: '',
      roles: '',
      status: '',
      hire: '',
    };
  }

  generateEmployeeId(
    newEmployee: Omit<TimeRecord, 'id' | 'statusColor'>
  ): string {
    const namePart = newEmployee.employee.trim().substring(0, 2).toUpperCase();

    // Find existing IDs starting with the same namePart
    const existingIds = this.timeRecords
      .map((r) => r.id)
      .filter((id) => id.startsWith(namePart));

    // Get numeric suffixes
    const numbers = existingIds
      .map((id) => parseInt(id.substring(namePart.length), 10))
      .filter((num) => !isNaN(num));

    const maxNum = numbers.length ? Math.max(...numbers) : 0;
    const nextNum = (maxNum + 1).toString().padStart(3, '0');

    return `${namePart}${nextNum}`;
  }
}
