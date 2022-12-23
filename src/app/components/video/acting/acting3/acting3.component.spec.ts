import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acting3Component } from './acting3.component';

describe('Acting3Component', () => {
  let component: Acting3Component;
  let fixture: ComponentFixture<Acting3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acting3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acting3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
