import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHeaderComponent } from './about-us-header.component';

describe('AboutUsHeaderComponent', () => {
  let component: AboutUsHeaderComponent;
  let fixture: ComponentFixture<AboutUsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
