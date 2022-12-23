import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselIntitutionalComponent } from './carrousel-intitutional.component';

describe('CarrouselIntitutionalComponent', () => {
  let component: CarrouselIntitutionalComponent;
  let fixture: ComponentFixture<CarrouselIntitutionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselIntitutionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselIntitutionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
