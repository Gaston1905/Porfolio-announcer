import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DubbingComponent } from './dubbing.component';

describe('DubbingComponent', () => {
  let component: DubbingComponent;
  let fixture: ComponentFixture<DubbingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DubbingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DubbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
