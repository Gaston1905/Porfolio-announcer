import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOver2Component } from './voice-over2.component';

describe('VoiceOver2Component', () => {
  let component: VoiceOver2Component;
  let fixture: ComponentFixture<VoiceOver2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceOver2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceOver2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
