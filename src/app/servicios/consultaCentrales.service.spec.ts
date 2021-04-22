import { TestBed } from '@angular/core/testing';

import { ConsultaCentralesService } from './consultaCentrales.service';

describe('ConsultaCentralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaCentralesService = TestBed.get(ConsultaCentralesService);
    expect(service).toBeTruthy();
  });
});
