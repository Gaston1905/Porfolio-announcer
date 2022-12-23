import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOverComponent } from './voice-over.component';

describe('VoiceOverComponent', () => {
  let component: VoiceOverComponent;
  let fixture: ComponentFixture<VoiceOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
