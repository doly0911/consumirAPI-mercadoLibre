import { TestBed } from '@angular/core/testing';

import { ApiMercadoLibreService } from './api-mercado-libre.service';

describe('ApiMercadoLibreService', () => {
  let service: ApiMercadoLibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMercadoLibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
