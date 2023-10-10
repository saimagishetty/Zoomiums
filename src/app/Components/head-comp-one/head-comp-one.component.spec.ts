import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCompOneComponent } from './head-comp-one.component';

describe('HeadCompOneComponent', () => {
  let component: HeadCompOneComponent;
  let fixture: ComponentFixture<HeadCompOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadCompOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
