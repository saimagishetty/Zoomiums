import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonImmigrationVisaComponent } from './non-immigration-visa.component';

describe('NonImmigrationVisaComponent', () => {
  let component: NonImmigrationVisaComponent;
  let fixture: ComponentFixture<NonImmigrationVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonImmigrationVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonImmigrationVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
