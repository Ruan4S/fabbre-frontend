import { TestBed } from '@angular/core/testing';

import { AbreviacoesService } from './abreviacoes.service';

describe('AbreviacoesService', () => {
  let service: AbreviacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbreviacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
