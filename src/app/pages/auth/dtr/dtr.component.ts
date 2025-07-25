import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dtr',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './dtr.component.html',
  styleUrl: './dtr.component.scss'
})
export class DtrComponent {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  timeInImage: string | null = null;
  timeOutImage: string | null = null;
  timeInDateTime: string | null = null;
  timeOutDateTime: string | null = null;
  cameraStarted = false;
  cameraError = false;

  private stream: MediaStream | null = null;


  ngOnInit() {
    this.startCamera();
  }
  
  ngOnDestroy() {
    this.stopCamera();
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      this.stream = stream;
      this.video.nativeElement.srcObject = stream;
      this.cameraStarted = true;
      this.cameraError = false;
    })
    .catch(err => {
      console.error("Camera failed to start:", err);
      this.cameraStarted = false;
      this.cameraError = true;
    });
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
      this.clearImage(); 
    }
  }

 

  timeIn() {
    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');

    // chck if camera is streaming
    if(!this.isStreamActive())
    {
      this.startCamera();
      return;
    }

    //start capture
    if (context) {
      // Draw the video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get formatted timestamp
      const now = new Date();
      const timestamp = this.formatDateTime(now);
      this.timeInDateTime = timestamp;

      // Draw the timestamp text onto the canvas
      context.font = '16px Arial';
      context.fillStyle = 'white';
      context.strokeStyle = 'black';
      context.lineWidth = 2;

      const x = 10;
      const y = canvas.height - 10;

      // Stroke for better visibility
      context.strokeText(timestamp, x, y);
      context.fillText(timestamp, x, y);

      // Convert canvas to image data
      this.timeInImage = canvas.toDataURL('image/png');
    }
  }

  timeOut() {
    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');

    if (context) {
      // Draw the video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get formatted timestamp
      const now = new Date();
      const timestamp = this.formatDateTime(now);
      this.timeOutDateTime = timestamp;

      // Draw the timestamp text onto the canvas
      context.font = '16px Arial';
      context.fillStyle = 'white';
      context.strokeStyle = 'black';
      context.lineWidth = 2;

      const x = 10;
      const y = canvas.height - 10;

      // Stroke for better visibility
      context.strokeText(timestamp, x, y);
      context.fillText(timestamp, x, y);

      // Convert canvas to image data
      this.timeOutImage = canvas.toDataURL('image/png');
  }
}

 clearImage() {
  const canvas = this.canvas.nativeElement;
  const context = canvas.getContext('2d');

  if (context) {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  }

  this.timeInImage = null;       // Clear <img [src]>
  this.timeInDateTime = null;     // Clear timestamp (optional)
  this.timeOutImage = null;       // Clear <img [src]>
  this.timeOutDateTime = null;     // Clear timestamp (optional)
}

// check streaming function
  private isStreamActive(): boolean {
    return !!this.stream && this.stream.getTracks().some(track => track.readyState === 'live');
  }

// format date and time function
  private formatDateTime(date: Date): string {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

    const pad = (n: number) => n.toString().padStart(2, '0');

    const MM = pad(date.getMonth() + 1);      // Months are 0-based
    const dd = pad(date.getDate());
    const yyyy = date.getFullYear();
    const HH = pad(date.getHours());
    const mm = pad(date.getMinutes());
    const ss = pad(date.getSeconds());

    return `${dayName} ${MM}-${dd}-${yyyy} ${HH}:${mm}:${ss}`;
  }
}
