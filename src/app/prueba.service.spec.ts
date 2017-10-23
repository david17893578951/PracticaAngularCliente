import { TestBed, inject } from '@angular/core/testing';

import { PruebaService } from './prueba.service';

describe('PruebaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PruebaService]
    });
  });

  it('should ...', inject([PruebaService], (service: PruebaService) => {
    expect(service).toBeTruthy();
  }));
});
