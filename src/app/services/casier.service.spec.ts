import { TestBed, inject } from '@angular/core/testing';

import { CasierService } from './casier.service';

describe('CasierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasierService]
    });
  });

  it('should be created', inject([CasierService], (service: CasierService) => {
    expect(service).toBeTruthy();
  }));
});
