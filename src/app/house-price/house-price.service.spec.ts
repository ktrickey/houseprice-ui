import { TestBed } from '@angular/core/testing';

import { HousePriceService } from './house-price.service';

describe('House=price.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousePriceService = TestBed.get(HousePriceService);
    expect(service).toBeTruthy();
  });
});
