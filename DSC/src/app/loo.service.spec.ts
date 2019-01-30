import { TestBed, inject } from '@angular/core/testing';

import { LooService } from './loo.service';

describe('LooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LooService]
    });
  });

  it('should be created', inject([LooService], (service: LooService) => {
    expect(service).toBeTruthy();
  }));
});
