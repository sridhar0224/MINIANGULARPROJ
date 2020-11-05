import { TestBed } from '@angular/core/testing';

import { MiniservicesService } from './miniservices.service';

describe('MiniservicesService', () => {
  let service: MiniservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
