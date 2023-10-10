import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentNewArticlesComponent } from './recent-new-articles.component';

describe('RecentNewArticlesComponent', () => {
  let component: RecentNewArticlesComponent;
  let fixture: ComponentFixture<RecentNewArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentNewArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentNewArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
