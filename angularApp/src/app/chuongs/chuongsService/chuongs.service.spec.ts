import { TestBed, inject } from '@angular/core/testing';

import { ChuongsService } from './chuongs.service';

describe('ChuongsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuongsService]
    });
  });

  it('should be created', inject([ChuongsService], (service: ChuongsService) => {
    expect(service).toBeTruthy();
  }));
});
