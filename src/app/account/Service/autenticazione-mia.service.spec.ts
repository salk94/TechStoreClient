import { TestBed } from '@angular/core/testing';

import { AutenticazioneMiaService } from './autenticazione-mia.service';

describe('AutenticazioneMiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticazioneMiaService = TestBed.get(AutenticazioneMiaService);
    expect(service).toBeTruthy();
  });
});
