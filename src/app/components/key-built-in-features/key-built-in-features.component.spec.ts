import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyBuiltInFeaturesComponent } from './key-built-in-features.component';

describe('KeyBuiltInFeaturesComponent', () => {
  let component: KeyBuiltInFeaturesComponent;
  let fixture: ComponentFixture<KeyBuiltInFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyBuiltInFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyBuiltInFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
