import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCompTwoComponent } from './head-comp-two.component';

describe('HeadCompTwoComponent', () => {
  let component: HeadCompTwoComponent;
  let fixture: ComponentFixture<HeadCompTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadCompTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
