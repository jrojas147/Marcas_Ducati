import { TestBed } from '@angular/core/testing';

import { RespuestaCalculadoraService } from './respuestaCalculadora.service';

describe('RespuestaCalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespuestaCalculadoraService = TestBed.get(RespuestaCalculadoraService);
    expect(service).toBeTruthy();
  });
});
