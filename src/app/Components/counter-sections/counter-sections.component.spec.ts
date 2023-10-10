import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSectionsComponent } from './counter-sections.component';

describe('CounterSectionsComponent', () => {
  let component: CounterSectionsComponent;
  let fixture: ComponentFixture<CounterSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
