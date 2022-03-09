import { TestBed } from '@angular/core/testing';

import { GooglePlacesAPIService } from './google-places-api.service';

describe('GooglePlacesAPIService', () => {
  let service: GooglePlacesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglePlacesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
