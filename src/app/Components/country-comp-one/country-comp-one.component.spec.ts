import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCompOneComponent } from './country-comp-one.component';

describe('CountryCompOneComponent', () => {
  let component: CountryCompOneComponent;
  let fixture: ComponentFixture<CountryCompOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCompOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
