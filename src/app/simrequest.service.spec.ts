import { TestBed } from '@angular/core/testing';

import { SimrequestService } from './simrequest.service';

describe('SimrequestService', () => {
  let service: SimrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
