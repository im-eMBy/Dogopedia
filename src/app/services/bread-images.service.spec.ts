import { TestBed } from '@angular/core/testing';

import { BreadImagesService } from './bread-images.service';

describe('BreadImagesService', () => {
  let service: BreadImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
