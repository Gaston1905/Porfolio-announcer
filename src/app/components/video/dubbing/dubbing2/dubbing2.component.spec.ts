import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dubbing2Component } from './dubbing2.component';

describe('Dubbing2Component', () => {
  let component: Dubbing2Component;
  let fixture: ComponentFixture<Dubbing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dubbing2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dubbing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
