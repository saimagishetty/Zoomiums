import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamlineComponent } from './streamline.component';

describe('StreamlineComponent', () => {
  let component: StreamlineComponent;
  let fixture: ComponentFixture<StreamlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


