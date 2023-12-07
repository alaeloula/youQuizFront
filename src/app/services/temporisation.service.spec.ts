import { TestBed } from '@angular/core/testing';

import { TemporisationService } from './temporisation.service';

describe('TemporisationService', () => {
  let service: TemporisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
