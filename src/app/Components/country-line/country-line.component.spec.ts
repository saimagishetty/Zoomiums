import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLineComponent } from './country-line.component';

describe('CountryLineComponent', () => {
  let component: CountryLineComponent;
  let fixture: ComponentFixture<CountryLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
