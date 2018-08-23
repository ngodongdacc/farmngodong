import { TestBed, inject } from '@angular/core/testing';

import { VatNuoisService } from './vat-nuois.service';

describe('VatNuoisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VatNuoisService]
    });
  });

  it('should be created', inject([VatNuoisService], (service: VatNuoisService) => {
    expect(service).toBeTruthy();
  }));
});
