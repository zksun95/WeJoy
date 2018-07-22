import { TestBed, inject } from '@angular/core/testing';

import { GetOrdersService } from './get-orders.service';

describe('GetOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrdersService]
    });
  });

  it('should be created', inject([GetOrdersService], (service: GetOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
