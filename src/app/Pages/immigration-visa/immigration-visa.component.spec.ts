import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationVisaComponent } from './immigration-visa.component';

describe('ImmigrationVisaComponent', () => {
  let component: ImmigrationVisaComponent;
  let fixture: ComponentFixture<ImmigrationVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmigrationVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrationVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
