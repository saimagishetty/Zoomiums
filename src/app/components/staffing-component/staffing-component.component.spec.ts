import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingComponentComponent } from './staffing-component.component';

describe('StaffingComponentComponent', () => {
  let component: StaffingComponentComponent;
  let fixture: ComponentFixture<StaffingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
