import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVisaComponent } from './post-visa.component';

describe('PostVisaComponent', () => {
  let component: PostVisaComponent;
  let fixture: ComponentFixture<PostVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
