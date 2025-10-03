import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerateComponent } from './employeerate.component';

describe('EmployeerateComponent', () => {
  let component: EmployeerateComponent;
  let fixture: ComponentFixture<EmployeerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeerateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
