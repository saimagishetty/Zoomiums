import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorFinsComponent } from './cor-fins.component';

describe('CorFinsComponent', () => {
  let component: CorFinsComponent;
  let fixture: ComponentFixture<CorFinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorFinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorFinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
