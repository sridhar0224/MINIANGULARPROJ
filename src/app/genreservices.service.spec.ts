import { TestBed } from '@angular/core/testing';

import { GenreservicesService } from './genreservices.service';

describe('GenreservicesService', () => {
  let service: GenreservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
