import { TestBed } from '@angular/core/testing';

import { Ex18 } from './ex18';

describe('Ex18', () => {
  let service: Ex18;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex18);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
