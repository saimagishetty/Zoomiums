import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCountriesComponent } from './popular-countries.component';

describe('PopularCountriesComponent', () => {
  let component: PopularCountriesComponent;
  let fixture: ComponentFixture<PopularCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
