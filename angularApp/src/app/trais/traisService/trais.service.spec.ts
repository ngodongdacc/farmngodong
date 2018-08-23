import { TestBed, inject } from '@angular/core/testing';

import { TraisService } from './trais.service';

describe('TraisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraisService]
    });
  });

  it('should be created', inject([TraisService], (service: TraisService) => {
    expect(service).toBeTruthy();
  }));
});
