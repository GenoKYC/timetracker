import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TimeRecord {
  position: string;
  rateamount: string;
}

@Component({
  selector: 'app-employeerate',
  imports: [CommonModule, FormsModule],
  templateUrl: './employeerate.component.html',
  styleUrl: './employeerate.component.scss',
})
export class EmployeerateComponent {
  tableHeaders = ['Position', 'Rate Amount (PHP)'];

  timeRecords: TimeRecord[] = [
    { position: 'Software Engineer', rateamount: '1500' },
  ];

  submitEmployeeRate(event: Event) {
    event.preventDefault();

    // Push with all required fields
    this.timeRecords.push({
      ...this.newEmployeeRate,
    });

    this.isModalOpen = false;
    // Reset form for next use
    this.newEmployeeRate = {
      position: '',
      rateamount: '',
    };
  }

  isModalOpen = false;
  newEmployeeRate = {
    position: '',
    rateamount: '',
  };
}
