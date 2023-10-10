import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTypeOneComponent } from './gallery-type-one.component';

describe('GalleryTypeOneComponent', () => {
  let component: GalleryTypeOneComponent;
  let fixture: ComponentFixture<GalleryTypeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTypeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
