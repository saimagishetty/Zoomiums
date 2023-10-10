import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortrackerOverComponent } from './cortracker-over.component';

describe('CortrackerOverComponent', () => {
  let component: CortrackerOverComponent;
  let fixture: ComponentFixture<CortrackerOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortrackerOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortrackerOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
