import { TestBed } from '@angular/core/testing';

import { Landings } from './landings';

describe('Landings', () => {
  let service: Landings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Landings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
