import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporisationComponent } from './temporisation.component';

describe('TemporisationComponent', () => {
  let component: TemporisationComponent;
  let fixture: ComponentFixture<TemporisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemporisationComponent]
    });
    fixture = TestBed.createComponent(TemporisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
