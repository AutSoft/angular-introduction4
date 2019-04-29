import { TestBed } from '@angular/core/testing';

import { FlightDetailResolverService } from './flight-detail-resolver.service';

describe('FlightDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightDetailResolverService = TestBed.get(FlightDetailResolverService);
    expect(service).toBeTruthy();
  });
});
