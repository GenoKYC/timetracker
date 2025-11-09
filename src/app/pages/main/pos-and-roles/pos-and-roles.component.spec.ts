import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAndRolesComponent } from './pos-and-roles.component';

describe('PosAndRolesComponent', () => {
  let component: PosAndRolesComponent;
  let fixture: ComponentFixture<PosAndRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosAndRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosAndRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
