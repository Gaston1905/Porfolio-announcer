import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Institutional3Component } from './institutional3.component';

describe('Institutional3Component', () => {
  let component: Institutional3Component;
  let fixture: ComponentFixture<Institutional3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Institutional3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Institutional3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
