import { TestBed, inject } from '@angular/core/testing';

import { GetEventsService } from './get-events.service';

describe('GetEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEventsService]
    });
  });

  it('should be created', inject([GetEventsService], (service: GetEventsService) => {
    expect(service).toBeTruthy();
  }));
});
