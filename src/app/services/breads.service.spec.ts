import { TestBed } from '@angular/core/testing';

import { BreadsService } from './breads.service';

describe('BreadsService', () => {
  let service: BreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
