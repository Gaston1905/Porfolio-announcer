import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOver3Component } from './voice-over3.component';

describe('VoiceOver3Component', () => {
  let component: VoiceOver3Component;
  let fixture: ComponentFixture<VoiceOver3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceOver3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceOver3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
