import { TestBed } from '@angular/core/testing';

import { AbreviacaoService } from './abreviacoes.service';

describe('AbreviacoesService', () => {
  let service: AbreviacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbreviacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
