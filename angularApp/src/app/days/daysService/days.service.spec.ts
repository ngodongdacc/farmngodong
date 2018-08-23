import { TestBed, inject } from '@angular/core/testing';

import { DaysService } from './days.service';

describe('DaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaysService]
    });
  });

  it('should be created', inject([DaysService], (service: DaysService) => {
    expect(service).toBeTruthy();
  }));
});
