import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dubbing3Component } from './dubbing3.component';

describe('Dubbing3Component', () => {
  let component: Dubbing3Component;
  let fixture: ComponentFixture<Dubbing3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dubbing3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dubbing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
