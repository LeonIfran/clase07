import { TestBed } from '@angular/core/testing';

import { ActivadoresService } from './activadores.service';

describe('ActivadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivadoresService = TestBed.get(ActivadoresService);
    expect(service).toBeTruthy();
  });
});
