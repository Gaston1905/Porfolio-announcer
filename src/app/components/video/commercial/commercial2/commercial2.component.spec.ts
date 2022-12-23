import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commercial2Component } from './commercial2.component';

describe('Commercial2Component', () => {
  let component: Commercial2Component;
  let fixture: ComponentFixture<Commercial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commercial2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commercial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
