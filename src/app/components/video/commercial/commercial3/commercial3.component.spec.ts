import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commercial3Component } from './commercial3.component';

describe('Commercial3Component', () => {
  let component: Commercial3Component;
  let fixture: ComponentFixture<Commercial3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commercial3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commercial3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
