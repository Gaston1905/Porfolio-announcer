import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselDubbingComponent } from './carrousel-dubbing.component';

describe('CarrouselDubbingComponent', () => {
  let component: CarrouselDubbingComponent;
  let fixture: ComponentFixture<CarrouselDubbingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselDubbingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselDubbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
