import { TestBed } from '@angular/core/testing';

import { AbreviaturasService } from './abreviaturas.service';

describe('AbreviaturasService', () => {
  let service: AbreviaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbreviaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
