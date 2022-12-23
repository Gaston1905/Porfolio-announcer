import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselCommercialComponent } from './carrousel-commercial.component';

describe('CarrouselCommercialComponent', () => {
  let component: CarrouselCommercialComponent;
  let fixture: ComponentFixture<CarrouselCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
