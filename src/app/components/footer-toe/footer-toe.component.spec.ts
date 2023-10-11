import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterToeComponent } from './footer-toe.component';

describe('FooterToeComponent', () => {
  let component: FooterToeComponent;
  let fixture: ComponentFixture<FooterToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterToeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
