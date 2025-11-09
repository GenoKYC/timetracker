import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavepreviewComponent } from './leavepreview.component';

describe('LeavepreviewComponent', () => {
  let component: LeavepreviewComponent;
  let fixture: ComponentFixture<LeavepreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeavepreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
