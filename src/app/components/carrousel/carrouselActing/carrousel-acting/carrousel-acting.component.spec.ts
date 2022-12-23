import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselActingComponent } from './carrousel-acting.component';

describe('CarrouselActingComponent', () => {
  let component: CarrouselActingComponent;
  let fixture: ComponentFixture<CarrouselActingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselActingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselActingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
