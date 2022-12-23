import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselVoiceOverComponent } from './carrousel-voice-over.component';

describe('CarrouselVoiceOverComponent', () => {
  let component: CarrouselVoiceOverComponent;
  let fixture: ComponentFixture<CarrouselVoiceOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselVoiceOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselVoiceOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
