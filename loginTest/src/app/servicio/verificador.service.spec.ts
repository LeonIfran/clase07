import { TestBed } from '@angular/core/testing';

import { VerificadorService } from './verificador.service';

describe('VerificadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerificadorService = TestBed.get(VerificadorService);
    expect(service).toBeTruthy();
  });
});
