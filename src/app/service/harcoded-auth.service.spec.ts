import { TestBed } from '@angular/core/testing';

import { HardcodedAuthService } from './hardcoded-auth.service';

describe('HarcodedAuthService', () => {
  let service: HardcodedAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
