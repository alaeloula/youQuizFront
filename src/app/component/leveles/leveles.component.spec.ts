import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelesComponent } from './leveles.component';

describe('LevelesComponent', () => {
  let component: LevelesComponent;
  let fixture: ComponentFixture<LevelesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelesComponent]
    });
    fixture = TestBed.createComponent(LevelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
