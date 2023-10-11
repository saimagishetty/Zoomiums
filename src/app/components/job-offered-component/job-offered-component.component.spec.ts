import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferedComponentComponent } from './job-offered-component.component';

describe('JobOfferedComponentComponent', () => {
  let component: JobOfferedComponentComponent;
  let fixture: ComponentFixture<JobOfferedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
