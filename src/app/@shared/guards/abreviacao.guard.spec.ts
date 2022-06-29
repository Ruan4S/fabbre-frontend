import { TestBed } from '@angular/core/testing';

import { AbreviacaoGuard } from './abreviacao.guard';

describe('AbreviacaoGuard', () => {
  let guard: AbreviacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbreviacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
