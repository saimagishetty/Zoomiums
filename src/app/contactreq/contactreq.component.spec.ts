import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactreqComponent } from './contactreq.component';

describe('ContactreqComponent', () => {
  let component: ContactreqComponent;
  let fixture: ComponentFixture<ContactreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactreqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
