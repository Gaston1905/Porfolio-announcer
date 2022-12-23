import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Institutional2Component } from './institutional2.component';

describe('Institutional2Component', () => {
  let component: Institutional2Component;
  let fixture: ComponentFixture<Institutional2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Institutional2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Institutional2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
