import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonals2Component } from './testimonals2.component';

describe('Testimonals2Component', () => {
  let component: Testimonals2Component;
  let fixture: ComponentFixture<Testimonals2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testimonals2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonals2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
