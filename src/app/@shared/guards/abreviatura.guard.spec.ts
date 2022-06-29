import { TestBed } from '@angular/core/testing';

import { AbreviaturaGuard } from './abreviatura.guard';

describe('AbreviaturaGuard', () => {
  let guard: AbreviaturaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbreviaturaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
