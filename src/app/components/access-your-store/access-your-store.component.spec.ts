import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessYourStoreComponent } from './access-your-store.component';

describe('AccessYourStoreComponent', () => {
  let component: AccessYourStoreComponent;
  let fixture: ComponentFixture<AccessYourStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessYourStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessYourStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
