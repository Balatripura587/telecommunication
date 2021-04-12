import { TestBed } from '@angular/core/testing';

import { PrepaidplansService } from './prepaidplans.service';

describe('PrepaidplansService', () => {
  let service: PrepaidplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepaidplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
