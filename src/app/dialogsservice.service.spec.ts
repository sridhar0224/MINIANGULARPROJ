import { TestBed } from '@angular/core/testing';

import { DialogsserviceService } from './dialogsservice.service';

describe('DialogsserviceService', () => {
  let service: DialogsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
