import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// interface TimeRecord {
//   position: string;
//   description: string;
//   employees: string;
// }

interface PositionRecord {
  positionid: number;
  position: string;
}

@Component({
  selector: 'app-positions',
  imports: [CommonModule, FormsModule],
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.scss',
})
export class PositionsComponent {
  tableHeaders = ['Position ID', 'Position'];
  positions: PositionRecord[] = [
    {
      positionid: 1,
      position: 'Contractual',
    },
    {
      positionid: 1,
      position: 'Part-Timer',
    },
    {
      positionid: 1,
      position: 'Project-Based',
    },
  ];

  isPositionModalOpen = false;

  newPosition = {
    positionid: 0,
    position: '',
  };
  PositionRecord: any;
  submitPosition(event: Event) {
    event.preventDefault();

    this.positions.push({ ...this.newPosition });

    this.isPositionModalOpen = false;

    this.newPosition = {
      positionid: 0,
      position: '',
    };
  }
}
