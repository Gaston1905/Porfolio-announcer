import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acting2Component } from './acting2.component';

describe('Acting2Component', () => {
  let component: Acting2Component;
  let fixture: ComponentFixture<Acting2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acting2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
